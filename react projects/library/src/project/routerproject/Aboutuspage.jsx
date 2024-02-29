import React, { useState, useEffect } from 'react';

const Aboutuspage = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/shubhamjha2');
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchUserRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/shubhamjha2/repos');
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch user repositories');
        }
      } catch (error) {
        console.error('Error fetching user repositories:', error);
      }
    };

    fetchUserData();
    fetchUserRepos();
  }, []);

  return (
    <div className="py-16 bg-white">  
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            {userData && <img src={userData.avatar_url} alt="Profile" loading="lazy" className="rounded-full w-80 h-80 mx-auto" />}
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">About Me</h2>
            {userData && (
              <div>
                <p className="mt-6 text-gray-600"><strong>Name:</strong> {userData.name}</p>
                <p className="mt-4 text-gray-600"><strong>Username:</strong> {userData.login}</p>
                <p className="mt-4 text-gray-600"><strong>Followers:</strong> {userData.followers}</p>
                <p className="mt-4 text-gray-600"><strong>Following:</strong> {userData.following}</p>
                <p className="mt-4 text-gray-600"><strong>Public Repos:</strong> {userData.public_repos}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutuspage;
