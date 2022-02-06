import moment from 'moment'
import Link from 'next/link'

export const ResourceList = ({ resources }) => (
  <div className="space-y-2">
    {resources.map((resource) => (
      <div
        key={resource.id}
        className="p-4 border rounded hover:bg-gray-100"
      >
      <p className="flex justify-between items-center w-full"><span className="text-gray-600 text-sm leading-3">{moment(resource.createdAt).format("LLL")}</span><span className="bg-gray-200 px-2 py-1 rounded text-xs">{resource.status}</span></p>
        <h2 className="font-bold">{resource.title}</h2>
        <p className="text-gray-600">{resource.description}</p>
        <Link href={`/resources/${resource.id}`}>
          <a className="text-indigo-500 border rounded px-2 py-1 text-sm mt-2 inline-block">Learn More</a>
        </Link>
      </div>
    ))}
  </div>
)
