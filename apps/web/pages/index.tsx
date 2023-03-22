import { useState } from "react";
import { Button } from "ui";

export default function Web() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Web</h1>
      <div data-test-id="count-value">
        {count}
      </div>
      <Button testId="add-count" onClick={() => setCount(count + 1)} label="Add 1" />
      <Button testId="remove-count" onClick={() => setCount(count - 1)} label="Remove 1" />
      <Button testId="reset-count" onClick={() => setCount(0)} label="Reset" />
    </div>
  );
}
