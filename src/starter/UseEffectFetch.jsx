import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";

const UseEffectFetch = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setusers(users);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, avatar_url, login, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="login" />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default UseEffectFetch;
