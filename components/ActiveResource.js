import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

const ActiveResource = () => {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    async function fetchResource() {
      const res = await axios.get("/api/resources/active");
      const resource = res.data;
      let timeToFinish = parseInt(resource.timeToFinish, 10);
      const elapsedTime = moment().diff(
        moment(resource.activationTime),
        "seconds"
      );

      const updatedTimeToFinish = timeToFinish * 60 - elapsedTime;

      if (updatedTimeToFinish >= 0) {
        timeToFinish = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }

      setResource(resource);
    }
    fetchResource();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds < 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const completeResource = () => {
    axios.patch("/api/resources", {...resource, status: "complete"})
      .then(() => {location.reload()})
      .catch(() => alert("Cannot complete resource."));
  }

  const hasResource = resource && resource.id;

  return (
    <div className="flex justify-between items-center bg-indigo-500 text-white h-12 px-6 border-b-1 border-indigo-600">
      <div className="flex space-x-4">
        <h1 className="font-bold">
          {hasResource ? resource.title : "No active resource."}
        </h1>
        <div>
          {hasResource &&
            (seconds > 0 ? (
              <h2>
                <span className="text-indigo-200/90">Time Remaining: </span>
                {seconds}
              </h2>
            ) : (
              <a className="px-2 py-1e bg-amber-400 rounded shadow text-indigo-800 text-sm cursor-pointer" onClick={completeResource}>
                Click to Complete
              </a>
            ))}
        </div>
      </div>
      {
        hasResource ? (
          <Link href="/">
            <a className="bg-gray-100 px-2 py-1 rounded hover:bg-white shadow inline-block text-indigo-600 text-sm">
              Go To Resource
            </a>
          </Link>
        ) : (
          <Link href="/">
            <a className="bg-gray-100 px-2 py-1 rounded hover:bg-white shadow inline-block text-indigo-600 text-sm">
              Go To Resource
            </a>
          </Link>
        )
      }
    </div>
  );
};

export default ActiveResource;
