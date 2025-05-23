export const MDXComponents = {
    ul: (props: any) => (
      <ul className="list-disc pl-5 space-y-2 marker:text-blue-500" {...props} />
    ),
    li: (props: any) => (
      <li className="text-zinc-700 dark:text-zinc-300" {...props} />
    ),
  };
  