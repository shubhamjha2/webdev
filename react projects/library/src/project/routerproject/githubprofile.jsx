import React, { useState, useEffect } from "react";

const GitHubProfile = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(
          "https://api.github.com/users/shubhamjha2"
        );
        const userJson = await userResponse.json();
        setUserData(userJson);

        const reposResponse = await fetch(
          "https://api.github.com/users/shubhamjha2/repos"
        );
        const reposJson = await reposResponse.json();
        setRepos(reposJson);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div  className="flex justify-around">
          <div className="  max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <img src={userData.avatar_url} alt="Avatar" className="w-full" />
              <div className="font-bold text-xl mt-1 mb-2">{userData.name}</div>
              <p className="text-gray-700 text-base">
                <strong>Username:</strong> {userData.login}
                <br />
                <strong>Followers:</strong> {userData.followers}
                <br />
                <strong>Following:</strong> {userData.following}
                <br />
                <strong>Public Repos:</strong> {userData.public_repos}
                <br />
                <strong>Twitter:</strong> {userData.twitter_username || "N/A"}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <a
                href={userData.html_url}
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Profile
              </a>
            </div>
          </div>
          <div className=" max-w-sm rounded overflow-hidden shadow-lg p-10">
            <h2 className="text-xl font-bold mb-4">Repositories:</h2>
            <ul className="list-disc list-inside">
              {repos.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    className="text-blue-600 hover:underline"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubProfile;
