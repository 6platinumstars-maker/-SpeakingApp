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
  ],
  
    section07: [
    { jp: "あなたはいくつ銀行口座を持っているのですか？", en: "How many bank accounts do you have?" },
    { jp: "あなたのジムに何人の会員がいますか？", en: "How many members does your gym have?" },
    { jp: "彼女は今日いくつのアポがありますか？", en: "How many appointments does she have today?" },
    { jp: "あなたにはどのくらいお金が欲しいのですか？", en: "How much money do you want?" },
    { jp: "彼は情報がどのくらい必要なのですか？", en: "How much information does he need?" },
    { jp: "この会社はいくつの支社を持っていますか？－15社です。", en: "How many branches does this company have? — It has fifteen branches." },
    { jp: "彼は1日に何通のEメールを受け取りますか？-1日に約50通です。", en: "How many emails does he receive a day? — He receives about fifty emails a day." },
    { jp: "佐藤さんは何部コピーが必要ですか？－彼女は10部必要です。", en: "How many copies does Ms. Sato need? — She needs ten copies." },
    { jp: "この工場は毎日どのくらいのチョコレートを作りますか？-毎日、100キログラム作ります。", en: "How much chocolate does this factory make every day? — It makes one hundred kilograms every day." },
    { jp: "あなたは毎週何人の応募者に会いますか？-毎週、10人です。", en: "How many applicants do you meet every week? — I meet ten every week." }
  ],

  section08: [
    { jp: "私は毎週月曜日、彼女に電話します。", en: "I call her every Monday." },
    { jp: "あなたは彼を知っていますか？", en: "Do you know him?" },
    { jp: "彼女は毎週私たちにEメールします。", en: "She emails us every week." },
    { jp: "彼らはあなたを好きです。", en: "They like you." },
    { jp: "私は彼らとゴルフをしません。", en: "I do not play golf with them." },
    { jp: "彼は彼女を知っていますか？", en: "Does he know her?" },
    { jp: "その助手はあなたを手助けますか？", en: "Does the assistant help you?" },
    { jp: "その取締役は私たちを必要としています。", en: "The director needs us." },
    { jp: "応募者たちはよく彼に電話をしてきますか？", en: "Do the applicants often call him?" },
    { jp: "その配管工は時々、彼らのために働きます。", en: "The plumber sometimes works for them." }
  ],

  section09: [
    { jp: "この記事を読みなさい。", en: "Read this article." },
    { jp: "この領収書にあなたの名前を書いてください。", en: "Write your name on this receipt." },
    { jp: "その競合相手に注意しなさい。", en: "Watch out for the competitor." },
    { jp: "このファイルを開いてはいけません。", en: "Do not open this file." },
    { jp: "その研修に遅れないでください。", en: "Do not be late for the training." },
    { jp: "その打合せの後で請求書を作りましょう。", en: "Let's make an invoice after the meeting." },
    { jp: "その結果を確認しましょう。", en: "Let's check the results." },
    { jp: "彼らと軽食を楽しみましょう。", en: "Let's enjoy a snack with them." },
    { jp: "この器具を買いましょう。", en: "Let's buy this equipment." },
    { jp: "その名所を訪れましょう。", en: "Let's visit the landmark." }
  ],

  section10: [
    { jp: "この売上報告書は私のものです。", en: "This sales report is mine." },
    { jp: "あの請求書はあなたのものですか？", en: "Is that invoice yours?" },
    { jp: "彼のコピー機は古い。彼女のもまた古い。", en: "His copier is old. Hers is also old." },
    { jp: "この台所用品はあなたのですか、それとも彼のものですか？", en: "Is this kitchenware yours or his?" },
    { jp: "あなたのはしごは短いです。私のを使ってください。", en: "Your ladder is short. Please use mine." },
    { jp: "この提案書はあなたたちのものですか？", en: "Is this proposal yours?" },
    { jp: "あの大きな行事は彼らのものですか？", en: "Is that big event theirs?" },
    { jp: "この青い荷物はあなたの秘書のものですか？", en: "Is this blue luggage your secretary's?" },
    { jp: "あの器具は彼のですか、それとも彼女のですか？", en: "Is that equipment his or hers?" },
    { jp: "これらのエアコンは私たちのものです。", en: "These air conditioners are ours." }
  ],

  section11: [
    { jp: "これは誰の予約ですか？", en: "Whose reservation is this?" },
    { jp: "あの記事は誰のですか？", en: "Whose article is that?" },
    { jp: "彼らは誰の納入業者ですか？", en: "Whose suppliers are they?" },
    { jp: "あれは誰の芸術作品ですか？", en: "Whose artwork is that?" },
    { jp: "あの旅行鞄は誰のですか？", en: "Whose suitcase is that?" },
    { jp: "これは誰の銀行口座ですか？", en: "Whose bank account is this?" },
    { jp: "この小さなノートパソコンは誰のですか？－彼女のです。", en: "Whose small laptop is this? — It is hers." },
    { jp: "あれは誰の売り上げ記録ですか？－彼のです。", en: "Whose sales record is that? — It is his." },
    { jp: "これらは誰のアイデアですか？－彼らのです。", en: "Whose ideas are these? — They are theirs." },
    { jp: "あれは誰のプロジェクトですか？-彼女たちのです。", en: "Whose project is that? — It is theirs." }
  ],

  section12: [
    { jp: "あなたのホッチキスはどこですか？", en: "Where is your stapler?" },
    { jp: "あなたはどこで働いていますか？", en: "Where do you work?" },
    { jp: "私たちの送迎バスはどこですか？", en: "Where is our shuttle bus?" },
    { jp: "彼女はどこで経済学を教えていますか？", en: "Where does she teach economics?" },
    { jp: "私たちの実習生たちはどこにいますか？", en: "Where are our interns?" },
    { jp: "彼らはどこで車を借りますか？-埼玉で借ります。", en: "Where do they rent a car? — They rent one in Saitama." },
    { jp: "あなたの弁護士はどこにいますか？-彼女はそのロビーにいます。", en: "Where is your lawyer? — She is in the lobby." },
    { jp: "君たちは毎日どこで昼食を食べるのですか？-食堂で食べます。", en: "Where do you eat lunch every day? — We eat in the cafeteria." },
    { jp: "値札はどこにありますか？", en: "Where is the price tag?" },
    { jp: "あの会計士はどこ出身ですか？-彼は香港出身です。", en: "Where is that accountant from? — He is from Hong Kong." }
  ]
  
};