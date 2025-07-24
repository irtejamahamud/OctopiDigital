import { useGetPostsQuery } from "../features/api/postsApi";

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
    <div>
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id} className="bg-gray-100 rounded p-4">
            <div className="font-semibold">{post.title}</div>
            <div className="text-gray-600">{post.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
