
export default function StackElement({ element: Icon, label }) {
  return (
    <div className="flex flex-row flex-wrap bg-neutral-50 dark:bg-neutral-800 border border-stone-300 dark:border-neutral-700 rounded-lg py-1 px-2 justify-center items-center gap-1 ">
      <Icon size={15}/>
      <p className="text-xs font-medium text-gray-900 dark:text-gray-100">
        {label}
      </p>
    </div>
  );
}