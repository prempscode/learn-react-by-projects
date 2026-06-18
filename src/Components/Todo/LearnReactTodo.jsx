import React from "react";
import "./LearnReactTodo.css";

const LearnReactTodo = () => {
  return (
    <div className="react-notes">
      <h1>Learn From This Project</h1>

      <section>
        <h2>1. Functional Components</h2>
        <p>
          A Functional Component is simply a JavaScript function that returns
          JSX (HTML-like syntax). React calls this function every time it needs
          to display or update the UI.
        </p>

        <pre>
          {`function Todo() {
  return <h1>Todo App</h1>;
}`}
        </pre>

        <p>
          Think of it as a reusable template — define it once, use it anywhere
          in your app.
        </p>
      </section>

      <section>
        <h2>2. useState Hook</h2>

        <p>
          <code>useState()</code> gives a component its own memory. Whenever the
          stored value changes, React automatically re-renders the component to
          show the updated UI.
        </p>

        <pre>
          {`const [task, setTask] = useState("");
const [alltask, setAlltask] = useState([]);`}
        </pre>

        <ul>
          <li>
            <strong>task</strong> — holds whatever the user is currently typing
            in the input field. Starts as an empty string <code>""</code>.
          </li>
          <li>
            <strong>alltask</strong> — holds the list of all added tasks. Starts
            as an empty array <code>[]</code>.
          </li>
          <li>
            <strong>setTask / setAlltask</strong> — the only correct way to
            update each value. Never modify state directly.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Controlled Components</h2>

        <p>
          By default, an HTML input manages its own value. In React, we take
          control: the input always displays what's in state, and every
          keystroke updates state. This keeps the UI and the data in sync at all
          times.
        </p>

        <pre>
          {`<input
  value={task}
  onChange={(e) => setTask(e.target.value)}
/>`}
        </pre>

        <p>
          <code>e.target.value</code> is the current text inside the input. Each
          character typed calls <code>setTask</code>, which updates{" "}
          <code>task</code>, which updates what the input displays — a
          continuous loop.
        </p>
      </section>

      <section>
        <h2>4. Event Handling</h2>

        <pre>
          {`<button onClick={addTask}>
  Add
</button>`}
        </pre>

        <p>
          <code>onClick</code> is a React event listener. When the button is
          clicked, React calls the <code>addTask</code> function. Notice there
          are no parentheses — <code>addTask</code>, not <code>addTask()</code>.
          We pass the function itself, not its return value.
        </p>
      </section>

      <section>
        <h2>5. Adding Data To State</h2>

        <pre>
          {`setAlltask([
  ...alltask,
  {
    text: task,
    completed: false
  }
]);`}
        </pre>

        <p>
          React state must never be mutated directly. Instead, we create a brand
          new array: <code>...alltask</code> copies all existing tasks (spread
          operator), then we append the new task object at the end.{" "}
          <code>setAlltask</code> replaces the old array with this new one,
          triggering a re-render.
        </p>
      </section>

      <section>
        <h2>6. Arrays Of Objects</h2>

        <pre>
          {`[
  {
    text: "Study",
    completed: false
  }
]`}
        </pre>

        <p>
          A plain string like <code>"Study"</code> can only hold one piece of
          information. An object lets us attach multiple properties to the same
          task — here, its <code>text</code> and whether it's{" "}
          <code>completed</code>. As the app grows, you can add more properties
          (e.g. <code>priority</code>, <code>dueDate</code>) without changing
          the overall structure.
        </p>
      </section>

      <section>
        <h2>7. Rendering Lists Using map()</h2>

        <pre>
          {`alltask.map((item, index) => (
  <tr key={index}>
    <td>{item.text}</td>
  </tr>
))`}
        </pre>

        <p>
          <code>map()</code> loops through the <code>alltask</code> array and
          converts each task object into a JSX element. The <code>key</code>{" "}
          prop (here, the index) helps React identify which item changed when
          the list updates — without it, React would re-render the entire list
          every time.
        </p>
      </section>

      <section>
        <h2>8. Conditional Rendering</h2>

        <pre>
          {`{
  alltask.length === 0 &&
  <p>No work to do!</p>
}`}
        </pre>

        <p>
          The <code>&&</code> (logical AND) operator works as a shortcut: if the
          left side is <code>true</code>, React renders the right side. If{" "}
          <code>alltask</code> has no items, the message appears. Once a task is
          added, the condition becomes <code>false</code> and the message
          disappears automatically.
        </p>
      </section>

      <section>
        <h2>9. Ternary Operator</h2>

        <pre>
          {`{
  item.completed
  ? <del>{item.text}</del>
  : item.text
}`}
        </pre>

        <p>
          Read it as an inline if-else:{" "}
          <em>
            "If <code>item.completed</code> is true, show the text with a
            strikethrough (<code>&lt;del&gt;</code>); otherwise, show plain
            text."
          </em>{" "}
          It lets you switch between two UI states in a single expression
          without writing a full <code>if</code> block.
        </p>
      </section>

      <section>
        <h2>10. Updating State</h2>

        <pre>
          {`const updatedTasks = [...alltask];

updatedTasks[index].completed =
!updatedTasks[index].completed;

setAlltask(updatedTasks);`}
        </pre>

        <p>
          We first copy the array with the spread operator so we're not touching
          the original state. Then we flip the <code>completed</code> flag for
          the chosen task — <code>!value</code> turns <code>true</code> to{" "}
          <code>false</code> and vice versa. Finally, <code>setAlltask</code>{" "}
          saves the updated copy, and React re-renders the list.
        </p>
      </section>

      <section>
        <h2>11. Deleting Tasks</h2>

        <pre>
          {`const updatedList =
alltask.filter(
  (item, i) => i !== index
);

setAlltask(updatedList);`}
        </pre>

        <p>
          <code>filter()</code> returns a new array containing only the items
          that pass a test. Here, the test is{" "}
          <em>
            "keep every task whose index is NOT the one we want to delete."
          </em>{" "}
          The original <code>alltask</code> is untouched; React replaces the
          state with the filtered result.
        </p>
      </section>

      <section>
        <h2>12. React Router Layout</h2>

        <pre>
          {`<Layout>
  <Outlet />
</Layout>`}
        </pre>

        <p>
          <code>Layout</code> is a wrapper component that holds shared UI — like
          a navbar or sidebar — that should appear on every page.{" "}
          <code>&lt;Outlet /&gt;</code> is a reserved slot where React Router
          injects the content of whichever child route is currently active.
          Navigate to a different URL and only the Outlet's content swaps out;
          the Layout stays put.
        </p>
      </section>

      <section>
        <h2>13. Project Concepts Covered</h2>

        <ul>
          <li>JSX</li>
          <li>Functional Components</li>
          <li>useState</li>
          <li>Controlled Components</li>
          <li>Event Handling</li>
          <li>Arrays &amp; Objects</li>
          <li>map()</li>
          <li>filter()</li>
          <li>Conditional Rendering</li>
          <li>Ternary Operator</li>
          <li>React Router</li>
          <li>Layout &amp; Outlet</li>
        </ul>
      </section>

      <section>
        <h2>14. Project Flow</h2>

        <pre>
          {`User Types Task
      ↓
setTask() updates the input's state
      ↓
User Clicks Add
      ↓
addTask() runs
      ↓
setAlltask() appends the new task to the list
      ↓
React Re-renders the component
      ↓
Task Appears in the table
      ↓
User Clicks Done or Delete
      ↓
State Updates (toggle / filter)
      ↓
UI Updates to reflect the change`}
        </pre>
      </section>
    </div>
  );
};

export default LearnReactTodo;
