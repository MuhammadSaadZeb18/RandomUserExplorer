// api/users.api.js
export const fetchUsers = async ({ page, gender, nat, limit = 8 }) => {
  let url = `https://randomuser.me/api/?results=${limit}&page=${page}`;
  if (gender) url += `&gender=${gender}`;
  if (nat) url += `&nat=${nat}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch users");

  const data = await res.json();
  return data.results;
};
