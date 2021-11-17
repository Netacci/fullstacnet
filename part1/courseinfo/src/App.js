import React, { useState } from 'react';

const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};
const Part = ({ part1, part2, part3, exercises1, exercises2, exercises3 }) => {
  return (
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  );
};

const Content = ({ course }) => {
  return (
    <>
      <Part
        part1={course.parts[0].name}
        exercises1={course.parts[0].exercises}
      />
      <Part
        part2={course.parts[1].name}
        exercises2={course.parts[1].exercises}
      />
      <Part
        part3={course.parts[2].name}
        exercises3={course.parts[2].exercises}
      />
    </>
  );
};
const Total = ({ course }) => {
  return (
    <>
      <p>
        Number of exercises{' '}
        {course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises}
      </p>
    </>
  );
};
const Display = ({ counter }) => <div>{counter} </div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const minusOne = () => setCounter(counter - 1);

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Display counter={counter} />
      <Button onClick={handleClick} text='PLUS' />
      <Button onClick={setToZero} text='ZERO' />
      <Button onClick={minusOne} text='MINUS' />
    </div>
  );
};

export default App;
