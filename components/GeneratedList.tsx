/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/line-clamp'),
    ],
  }
  ```
*/
const announcements = [
    {
        id: 1,
        title: 'Office closed on July 2nd',
        preview:
            'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
    },
    {
        id: 2,
        title: 'New password policy',
        preview:
            'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
    },
    {
        id: 3,
        title: 'Office closed on July 2nd',
        preview:
            'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
    },
]

export interface GeneratedItem {
    id: number
    title: string
    preview: string

}



export default function GeneratedList({ items, onClick }: { items: GeneratedItem[], onClick: any }): JSX.Element {
    return (
        <div>
            <div className="flow-root mt-6">
                <ul role="list" className="-my-5 divide-y divide-gray-200">
                    {items.map((item) => (
                        <li key={item.id} className="py-5">
                            <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                                <h3 className="text-sm font-semibold text-gray-800">
                                    <a href="#" className="hover:underline focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {item.title}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.preview}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* if item is not empty */}
            {items.length > 0 && (
                <div className="mt-6">
                    <button
                        onClick={() => onClick?.()}
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        View More
                    </button>
                </div>)}
        </div>
    )
}
