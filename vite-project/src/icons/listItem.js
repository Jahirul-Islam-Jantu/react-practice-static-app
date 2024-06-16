import {socialIcons} from "./data.js";

export const itemDetails = {
        breadcrumbs:[
            {
                text: 'Home',
                link: "http://google.com?q=home",
                
            },
            {
                text: 'Shop',
                link: "http://google.com?q=shop",

            },
            {
                text: 'Men',
                link: "http://google.com?q=men",

            },
            {
                text: 'T-Shirts',
                link: "http://google.com?q=t-shirts",

            }
        ],

        title: "Originals Windbreaker Winter Face Cream",
        price: {regular: 23.90,
                discount: 21.50},
        tags: [{
            text: "Women",
            link: "http://google.com?q=women",

            },
            {
                text: "Shampoo",
                link: "http://google.com?q=shampoo",

            }
        ],
        description: "Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\n" +
            "\n" +
            "Part of the Kaval Collection.\n" +
            "Regular fit is eased, but not sloppy, and perfect for any activity.\n" +
            "Plain-woven Face Cream specifically constructed for freedom of movement.",
        category:[{
            text: "Women",
            link: "http://google.com?q=women",

        },
            {
                text: "Shampoo",
                link: "http://google.com?q=shampoo",

            }
        ],
        share: socialIcons,
        images: [
            {
                thumb: "thumb-url",
                original: "original-url",
                alt: "alt-text",
                featured: true
            },
            {
                thumb: "thumb-url",
                original: "original-url",
                alt: "alt-text",
                featured: false
            }
        ],
    wishlist: true



    }