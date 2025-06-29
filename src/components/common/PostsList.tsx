import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  attributes: {
    title: string;
    content: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface PostsResponse {
  data: Post[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get<PostsResponse>(`${apiUrl}/api/posts`);
        
        setPosts(response.data.data);
      } catch (err) {
        console.error('API çağrısında hata:', err);
        setError('Veri çekilemedi');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-lg text-gray-600">Yükleniyor...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-lg text-gray-600">Veri bulunamadı</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Haberler</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {post.attributes.title}
            </h3>
            
            <div 
              className="text-gray-600 mb-4 line-clamp-3"
              dangerouslySetInnerHTML={{ 
                __html: post.attributes.content?.substring(0, 150) + '...' || 'İçerik mevcut değil' 
              }}
            />
            
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>
                {new Date(post.attributes.publishedAt).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Devamını Oku
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
