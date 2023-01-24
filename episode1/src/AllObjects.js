//Putting an component in other file simple as that buddy

//Map or something with objects
//Somehow I never knew map functions also works with this object something as well
export const AllObjects = () => {
  const users = [
    { name: "a", age: 123, job: "jobless" },
    { name: "b", age: 122, job: "jobless" },
    { name: "c", age: 121, job: "jobless" },
  ];
  return (
    <div>
      {users.map((user) => {
        return (
          <h1>
            {user.name} {user.age}
          </h1>
        );
      })}
    </div>
  );
};
