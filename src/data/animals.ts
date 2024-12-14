
export interface Animal {
    id: number;
    name_jp: string;
    name_en: string;
    description: string;
    image_path: string;
    sound_path: string;
}

export const ANIMALS: Animal[] = [
    {
        id: 1,
        name_jp: "ライオン",
        name_en: "Lion",
        description: "アフリカに生息する大型肉食獣で、「百獣の王」と呼ばれる",
        image_path: "/images/lion.jpg",
        sound_path: "/sounds/lion.wav"
    },
    {
        id: 2,
        name_jp: "ゾウ",
        name_en: "Elephant",
        description: "地球上最大の陸上動物で、長い鼻を持つことで知られる",
        image_path: "/images/elephant.jpg",
        sound_path: "/sounds/elephant.wav"
    },
    {
        id: 3,
        name_jp: "キリン",
        name_en: "Giraffe",
        description: "世界一背の高い陸上動物で、特徴的な模様を持つ",
        image_path: "/images/giraffe.jpg",
        sound_path: "/sounds/giraffe.wav"
    },
    {
        id: 4,
        name_jp: "パンダ",
        name_en: "Panda",
        description: "中国原産の希少な動物で、竹を主食とする",
        image_path: "/images/panda.jpg",
        sound_path: "/sounds/panda.wav"
    },
    {
        id: 5,
        name_jp: "トラ",
        name_en: "Tiger",
        description: "アジアに生息する大型ネコ科動物で、縞模様が特徴",
        image_path: "/images/tiger.jpg",
        sound_path: "/sounds/tiger.wav"
    },
    {
        id: 6,
        name_jp: "カンガルー",
        name_en: "Kangaroo",
        description: "オーストラリアを代表する有袋類で、跳躍力が特徴",
        image_path: "/images/kangaroo.jpg",
        sound_path: "/sounds/kangaroo.wav"
    },
    {
        id: 7,
        name_jp: "ペンギン",
        name_en: "Penguin",
        description: "南極に生息する飛べない鳥で、水中での泳ぎが得意",
        image_path: "/images/penguin.jpg",
        sound_path: "/sounds/penguin.wav"
    },
    {
        id: 8,
        name_jp: "コアラ",
        name_en: "Koala",
        description: "オーストラリアに生息する有袋類で、ユーカリの葉を主食とする",
        image_path: "/images/koala.jpg",
        sound_path: "/sounds/koala.wav"
    },
    {
        id: 9,
        name_jp: "キツネ",
        name_en: "Fox",
        description: "世界中に生息する小型の肉食獣で、賢い動物として知られる",
        image_path: "/images/fox.jpg",
        sound_path: "/sounds/fox.wav"
    },
    {
        id: 10,
        name_jp: "フクロウ",
        name_en: "Owl",
        description: "夜行性の猛禽類で、首が大きく回転することで知られる",
        image_path: "/images/owl.jpg",
        sound_path: "/sounds/owl.wav"
    }
];