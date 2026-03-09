const bathData = {
  section01: [
    { jp: "これは名刺です。", en: "This is a business card." },
    { jp: "あれは新しいコンピュータですか？― はい、そうです。", en: "Is that a new computer? — Yes, it is." },
    { jp: "このアプリは古いですか？―いいえ古くありません。", en: "Is this app old? — No, it isn't." },
    { jp: "あの作業はあまり楽しくない。", en: "That work is not so fun." },
    { jp: "これは携帯電話ですか、それとも音楽プレイヤーですか？― 携帯電話です。", en: "Is this a mobile phone or a music player? — It is a mobile phone." },
    { jp: "あれらは英語の書類ですか？― いいえ、違います。", en: "Are those English documents? — No, they aren't." },
    { jp: "この人々は私たちのお客さんです。", en: "These people are our customers." },
    { jp: "これらの製品はとても高い。", en: "These products are very expensive." },
    { jp: "これらは腕時計ですか、それともスマホですか？― 腕時計です。", en: "Are these watches or smartphones? — They are watches." },
    { jp: "あのインターンたちは日本人ですか？それともベトナム人ですか？― 日本人です。", en: "Are those interns Japanese or Vietnamese? — They are Japanese." }
  ],

  section02: [
    { jp: "これは何ですか？― 地図です。", en: "What is this? — It is a map." },
    { jp: "あれは何ですか？― マイクです。", en: "What is that? — It is a microphone." },
    { jp: "これは何ですか？― 領収書です。", en: "What is this? — It is a receipt." },
    { jp: "あれは何ですか？― 予定表です。", en: "What is that? — It is a schedule." },
    { jp: "これらは何ですか？― 請求書です。", en: "What are these? — They are bills." },
    { jp: "あれらは何ですか？― 優待券です。", en: "What are those? — They are coupons." },
    { jp: "これらの箱は何ですか？― 運動器具です。", en: "What are these boxes? — They are exercise equipment." },
    { jp: "彼女の仕事は何ですか？― 旅行ガイドです。", en: "What is her job? — She is a tour guide." },
    { jp: "彼の職業は何ですか？― 配管工です。", en: "What is his occupation? — He is a plumber." },
    { jp: "あれらのお皿は何ですか？― 製品見本です。", en: "What are those plates? — They are product samples." }
  ],

  section03: [
    { jp: "私はエンジニアです。", en: "I am an engineer." },
    { jp: "あなたはデザイナーですか？", en: "Are you a designer?" },
    { jp: "彼女は科学者ですか？", en: "Is she a scientist?" },
    { jp: "彼は研究員ですか？― はい、そうです。", en: "Is he a researcher? — Yes, he is." },
    { jp: "私たちはインターンです。", en: "We are interns." },
    { jp: "あなたたちは編集者ですか？", en: "Are you editors?" },
    { jp: "彼らは整備士です。", en: "They are mechanics." },
    { jp: "彼女たちは乗客ですか？― いいえ、違います。", en: "Are they passengers? — No, they aren't." },
    { jp: "あなたは緊張していますか？― はい、緊張しています。", en: "Are you nervous? — Yes, I am." },
    { jp: "彼らは親しみやすいです。", en: "They are friendly." }
  ],

  section04: [
    { jp: "彼は私の上司です。", en: "He is my boss." },
    { jp: "このファイルはあなたの報告ですか？-はいそうです。", en: "Is this file your report? — Yes, it is." },
    { jp: "これらは彼らの書類です。", en: "These are their documents." },
    { jp: "あれらの男性は彼女のお客さんです。", en: "Those men are her customers." },
    { jp: "これは私たちのアイデアです。", en: "This is our idea." },
    { jp: "あれはあなた方の製品ですか？ｰいいえ、違います。", en: "Is that your product? — No, it isn't." },
    { jp: "あれは彼女たちの目標です。", en: "That is their goal." },
    { jp: "私たちの問題は大きくないです。", en: "Our problem is not big." },
    { jp: "あなたの仕事仲間はベジタリアンですか？-いいえ、彼女は違います。", en: "Is your coworker a vegetarian? — No, she isn't." },
    { jp: "彼の技能は良いですか？-はい、良いです。", en: "Are his skills good? — Yes, they are." }
  ],

  section05: [
    { jp: "あの男性はだれですか？-私の監督者です。", en: "Who is that man? — He is my supervisor." },
    { jp: "あの女性は誰ですか？-ジャーナリストです。", en: "Who is that woman? — She is a journalist." },
    { jp: "あの男性たちは誰ですか？-大工です。", en: "Who are those men? — They are carpenters." },
    { jp: "あの女性たちは誰ですか？-客室乗務員です。", en: "Who are those women? — They are flight attendants." },
    { jp: "この若い助手は誰ですか？-彼女はテイラーさんです。", en: "Who is this young assistant? — She is Ms. Taylor." },
    { jp: "あの背の高い建築家は誰ですか？-彼はハリスさんです。", en: "Who is that tall architect? — He is Mr. Harris." },
    { jp: "この背の低い少女は誰ですか？-彼女はサラ・キングです。", en: "Who is this short girl? — She is Sarah King." },
    { jp: "ナンシーと一緒にいるあの男性は誰ですか？-彼は彼女のビジネスパートナーです。", en: "Who is that man with Nancy? — He is her business partner." },
    { jp: "彼女たちは誰ですか？-受付係です。", en: "Who are they? — They are receptionists." },
    { jp: "彼らは誰ですか？-清掃員です。", en: "Who are they? — They are cleaner staff." }
  ],

  section06: [
    { jp: "私は京都行の切符を持っています。", en: "I have a ticket to Kyoto." },
    { jp: "あなたは資格を持っていますか？-いいえ、持っていません。", en: "Do you have qualifications? — No, I don't." },
    { jp: "彼はその製品見本を持っています。", en: "He has the product sample." },
    { jp: "彼はその販売員を知っています。", en: "He knows the sales staff." },
    { jp: "あなたはそのマネージャーを知っていますか？-はい、知っています。", en: "Do you know the manager? — Yes, I do." },
    { jp: "ケンはそのパン屋を知っています。", en: "Ken knows the baker." },
    { jp: "タナカさんは電車を使いますか？-いいえ、彼は使っていません。", en: "Does Mr. Tanaka use the train? — No, he doesn't." },
    { jp: "あなたの上司は何を持っているのですか？-彼女は履歴書を持っています。", en: "What does your boss have? — She has a resume." },
    { jp: "彼らには今日、打合せがあります。", en: "They have a meeting today." },
    { jp: "この会社には3つの支社があります。", en: "This company has three branches." }
  ]
  
};