// hooks/useUsers.js
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users.api";

export const useUsers = (page, gender, nat, limit = 9) => {
  return useQuery({
    queryKey: ["users", page, gender, nat, limit],
    queryFn: () => fetchUsers({ page, gender, nat, limit }),
    keepPreviousData: true, // for pagination smoothness
  });
};
