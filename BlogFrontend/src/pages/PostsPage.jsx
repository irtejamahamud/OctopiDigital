import { useGetPostsQuery } from "../features/api/postsApi";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FaUserCircle } from "react-icons/fa";

dayjs.extend(relativeTime);

export default function PostsPage() {
  const { data: posts = [], isLoading, error } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-red-600">
        Error: {error.error || "Failed to load posts"}
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Recent Posts</h1>
      <ul className="space-y-6">
        {posts.length === 0 && (
          <div className="text-gray-500 text-center">No posts found.</div>
        )}
        {posts.map((post) => (
          <li
            key={post._id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col gap-2 p-6"
          >
            <Link to={`/posts/${post._id}`}>
              <div className="text-xl font-semibold text-blue-700 hover:underline">
                {post.title}
              </div>
            </Link>
            <div className="text-gray-700 mb-1">
              {post.content.length > 180
                ? post.content.slice(0, 180) + "..."
                : post.content}
            </div>
            <div className="flex items-center gap-3 text-sm mt-2 text-gray-500">
              <FaUserCircle className="text-blue-500" />
              <span>{post.author?.username || "Unknown"}</span>
              <span className="mx-2">•</span>
              <span>{dayjs(post.createdAt).fromNow()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
