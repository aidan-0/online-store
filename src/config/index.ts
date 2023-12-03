export const PRODUCT_CATEGORIES = [
    // TODO: MAKE THIS DYNAMIC AND GET IMG DATA FROM ACTUAL PRODUCTS
    {
        label: "IT Equipment",
        value: "it_equipment" as const,
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageSrc: "/it-equipment/it-equipment-overall.jpg"
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/it-equipment/it-equipment-overall.jpg"
            },
            {
                name: "Best Sellers",
                href: "#",
                imageSrc: "/it-equipment/it-equipment-overall.jpg"
            },
        ]
    },
    {
        label: "Uniforms",
        value: "uniforms" as const,
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageSrc: "/books/book-overall.jpg"
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/books/book-overall.jpg"
            },
            {
                name: "Best Sellers",
                href: "#",
                imageSrc: "/books/book-overall.jpg"
            },
        ]
    },
]