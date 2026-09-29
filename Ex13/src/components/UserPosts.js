import React, { useState, useEffect } from 'react';

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
      <h3>Posts for User ID: {userId}</h3>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: '#3a3f4d',
                padding: '12px',
                marginBottom: '10px',
                borderRadius: '6px'
              }}
            >
              <h4 style={{ margin: '0 0 8px 0', color: '#ffffff' }}>{post.title}</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#ccc' }}>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserPosts;