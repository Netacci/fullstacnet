const Course = ({ course }) => {
  console.log(course);
  return (
    <>
      <h1>Web development Curriculum</h1>
      <Header name={course[0].name} />
      <Content parts={course[0].parts} />
      <Total parts={course[0].parts} />
      <Header name={course[1].name} />
      <Content parts={course[1].parts} />
      <Total parts={course[1].parts} />

      {/* {course.map((co) => (
          <Header key={co.id} name={co.name} />
        ))}
        {course.map((co) => (
          <Content key={co.id} parts={co.parts} />
        ))} */}
    </>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};
const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};
const Content = ({ parts }) => {
  return (
    <>
      {console.log(parts)}
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};
const Total = ({ parts }) => {
  // map through the parts array to extract the value of the exrcises then use reduce to add them up
  const total = parts.map((part) => part.exercises).reduce((a, b) => a + b, 0);
  console.log(total);

  return <h4>total of {total} exercises</h4>;
};

export default Course;
