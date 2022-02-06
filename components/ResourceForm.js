import { useState } from "react";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: 2,
  timeToFinish: 60,
};

const ResourceForm = ({ onFormSubmit, initialData }) => {
  const [form, setForm] = useState(initialData || DEFAULT_DATA);

  const submit = () => onFormSubmit(form);

  const reset = () => {
    setForm(DEFAULT_DATA);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="title" className="text-gray-500 text-sm">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="border rounded h-8 px-2 block mt-1 w-full"
          value={form.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description" className="text-gray-500 text-sm">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="border rounded h-8 px-2 block mt-1 w-full h-16"
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="link" className="text-gray-500 text-sm">
          Link
        </label>
        <input
          type="text"
          id="link"
          name="link"
          className="border rounded h-8 px-2 block mt-1 w-full"
          value={form.link}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="priority" className="text-gray-500 text-sm">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          className="border rounded h-8 px-2 block mt-1 w-full bg-white"
          value={form.priority}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div>
        <label htmlFor="timeToFinish" className="text-gray-500 text-sm">
          Time to Finish
        </label>
        <input
          type="number"
          id="timeToFinish"
          name="timeToFinish"
          className="border rounded h-8 px-2 block mt-1 w-full"
          value={form.timeToFinish}
          onChange={handleChange}
        />
      </div>
      <div className="space-x-4">
        <button
          type="button"
          className="bg-indigo-500 text-white px-2 rounded text-sm h-8"
          onClick={submit}
        >
          Submit
        </button>
        <button
          type="button"
          className="bg-gray-300 text-black px-2 rounded text-sm h-8"
          onClick={reset}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ResourceForm;
