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

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(' ')}</div>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);
  const setToZero = () => {
    setCounter(0);
    setLeft(0);
    setRight(0);
    setAll([]);
  };
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
  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0,
  // });
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeft = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  };
  const handleRight = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Display counter={counter} />
      <Button onClick={handleClick} text='PLUS' />
      <Button onClick={setToZero} text='  RESET' />
      <Button onClick={minusOne} text='MINUS' />
      {left}
      <Button onClick={handleLeft} text='left' />
      <Button onClick={handleRight} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
