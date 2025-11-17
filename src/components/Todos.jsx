import TodoList from "./TodoList";

export default function Todos() {
  return (
    <div class="flex items-center justify-center h-screen">
      <div class="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
        <div class="flex items-center mb-6">
          <h1 class="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
        </div>
        <div class="relative">
          <input
            type="text"
            placeholder="What needs to be done today?"
            class="w-full px-2 py-3 border rounded outline-none border-grey-600"
          />
        </div>
        <TodoList />
      </div>
    </div>
  );
}
