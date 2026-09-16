// TaskForm.tsx
interface TaskFormProps {
  input: string;
  setInput: (value: string) => void;
  onAdd: () => void;
}

function TaskForm({ input, setInput, onAdd }: TaskFormProps) {
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
