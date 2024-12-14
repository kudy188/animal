interface Animal {
  number: number;
  nameJa: string;
  nameEn: string;
  description: string;
  image: string;
  sound: string;
}

export const animals: Animal[] = [
  {
    number: 1,
    nameJa: 'ライオン',
    nameEn: 'Lion',
    description: 'アフリカに生息する大型肉食獣で、「百獣の王」と呼ばれる猛獣です。',
    image: 'lion.jpg',
    sound: 'lion.wav'
  },
  {
    number: 2,
    nameJa: 'ゾウ',
    nameEn: 'Elephant',
    description: '地球上で最大の陸上動物で、長い鼻と大きな耳を持つ特徴的な姿をしています。',
    image: 'elephant.jpg',
    sound: 'elephant.wav'
  },
  {
    number: 3,
    nameJa: 'キリン',
    nameEn: 'Giraffe',
    description: '世界一背の高い陸上動物で、長い首を持つことで知られています。',
    image: 'giraffe.jpg',
    sound: 'giraffe.wav'
  },
  {
    number: 4,
    nameJa: 'パンダ',
    nameEn: 'Panda',
    description: '中国原産の希少な動物で、白黒の毛並みと竹を食べる習性で有名です。',
    image: 'panda.jpg',
    sound: 'panda.wav'
  },
  {
    number: 5,
    nameJa: 'ペンギン',
    nameEn: 'Penguin',
    description: '南極に生息する飛べない鳥で、水中での泳ぎが得意な海鳥です。',
    image: 'penguin.jpg',
    sound: 'penguin.wav'
  },
  {
    number: 6,
    nameJa: 'キツネ',
    nameEn: 'Fox',
    description: '賢い動物として知られ、世界中の様々な地域に生息している小型の肉食獣です。',
    image: 'fox.jpg',
    sound: 'fox.wav'
  },
  {
    number: 7,
    nameJa: 'カンガルー',
    nameEn: 'Kangaroo',
    description: 'オーストラリア固有の有袋類で、強力な後足でジャンプして移動します。',
    image: 'kangaroo.jpg',
    sound: 'kangaroo.wav'
  },
  {
    number: 8,
    nameJa: 'コアラ',
    nameEn: 'Koala',
    description: 'ユーカリの葉を主食とするオーストラリアの有袋類で、木の上で生活します。',
    image: 'koala.jpg',
    sound: 'koala.wav'
  },
  {
    number: 9,
    nameJa: 'フクロウ',
    nameEn: 'Owl',
    description: '夜行性の猛禽類で、優れた視力と聴力を持ち、静かに飛行することができます。',
    image: 'owl.jpg',
    sound: 'owl.wav'
  },
  {
    number: 10,
    nameJa: 'トラ',
    nameEn: 'Tiger',
    description: 'アジアに生息する最大の猫科動物で、力強い体格と特徴的な縞模様を持っています。',
    image: 'tiger.jpg',
    sound: 'tiger.wav'
  }
];
