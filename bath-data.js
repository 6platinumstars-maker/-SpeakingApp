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
  ],
  
    section13: [
    { jp: "あなたの昼休みはいつですか？", en: "When is your lunch break?" },
    { jp: "あなたはいつ運動しますか？", en: "When do you exercise?" },
    { jp: "あなたはいつ営業部と共に働きますか？", en: "When do you work with the sales department?" },
    { jp: "彼の出張日はいつですか？", en: "When is his business trip?" },
    { jp: "その発売日はいつですか？", en: "When is the release date?" },
    { jp: "その職員はいつその扉に鍵をかけますか？", en: "When does the staff lock the door?" },
    { jp: "彼らはいつその弁護士事務所に行きますか？", en: "When do they go to the lawyer's office?" },
    { jp: "彼女と彼女の上司はいつその打合せを終えますか？", en: "When do she and her boss finish to the meeting?" },
    { jp: "あなたの歯医者は毎朝、いつ、そのクリニックを開けますか？", en: "When does your dentist open the clinic every morning?" },
    { jp: "あなたはいつ彼に連絡しますか？", en: "When do you contact him?" }
  ],

  section14: [
    { jp: "どちらがあなたの封筒ですか？", en: "Which is your envelope?" },
    { jp: "どちらが彼の手提げかばんですか？", en: "Which is his briefcase?" },
    { jp: "どちらが彼女の眼鏡ですか？", en: "Which are her glasses?" },
    { jp: "どちらがあなたの会社のブースですか？", en: "Which is your company's booth?" },
    { jp: "どの会員カードがあなたのですか？", en: "Which membership card is yours?" },
    { jp: "どの男性が私たちの整備士ですか？―あの背の高い男性です。", en: "Which man is our mechanic? — That tall man is." },
    { jp: "どちらがあなたの従業員たちですか？こちらの男性たちですか？それともこちらの男性たちですか？―こちらの男性たちです。", en: "Which are your employees? These men or those men? — These men are." },
    { jp: "どの駐車券が彼女のですか？―あの黄色い券です。", en: "Which parking ticket is hers? — That yellow ticket is." },
    { jp: "どちらがあなたの会社の新しいモデルですか？こちらですか？それともあちらのですか？―あちらです。", en: "Which is your company's new model? This one or that one? — That one is." },
    { jp: "どちらが彼のお気に入りの飲み物ですか？コーヒーですか、それとも緑茶ですか？―緑茶です。", en: "Which is his favorite beverage, coffee or green tea? — Green tea is." }
  ],

  section15: [
    { jp: "今日は木曜日です。", en: "It is Thursday today." },
    { jp: "今日は火曜日ですか。", en: "Is it Tuesday today?" },
    { jp: "今シドニーでは午後１時です。", en: "It is one o'clock in the afternoon in Sydney now." },
    { jp: "この講堂の中は暖かいですか。", en: "Is it warm in this auditorium?" },
    { jp: "その玄関のまわりは少し暗いです。", en: "It is a little dark around the entrance." },
    { jp: "ブエノスアイレスは冬です。", en: "It is winter in Buenos Aires." },
    { jp: "今日は暑いです。私たちのお気に入りの居酒屋に行きましょう。", en: "It is hot today. Let's go to our favorite pub." },
    { jp: "昼飯の時間です。", en: "It is lunch time." },
    { jp: "あの倉庫の中はいつも乾燥しています。", en: "It is always dry in that warehouse." },
    { jp: "ここから私たちの子会社まではそんなに遠くはありません。", en: "It is not so far from here to our subsidiary." }
  ],

  section16: [
    { jp: "ニューヨークは今何時ですか？", en: "What time is it in New York now?" },
    { jp: "あなたは毎朝、何時にそのバスに乗るのですか？", en: "What time do you take the bus every morning?" },
    { jp: "その店は何時に開くのですか？", en: "What time does the store open?" },
    { jp: "その市場は何時に閉まるのですか？", en: "What time does the market close?" },
    { jp: "あなたの上司は普段何時に事務所に来るのですか？", en: "What time does your boss usually come to the office?" },
    { jp: "あなたは毎日、何時にお昼休みを取るのですか？―12時半に取ります。", en: "What time do you have a lunch break every day? — I have it at 12:30." },
    { jp: "今そちらは何時ですか？―５時です。", en: "What time is it there now? — It is 5 in the morning." },
    { jp: "あなたとあなたの上司は何時に報告書を受け取りますか？―10時に受け取ります。", en: "What time do you and your boss receive a report? — We receive it at 10 ." },
    { jp: "彼らは何時にその食料品店を開けますか？―午前8時に開けます。", en: "What time do they open the grocery store? — They open it at 8 in the morning." },
    { jp: "そのトレーニングは何時に終わりますか？―午後3時に終わります。", en: "What time does the training end? — It ends at 3 in the afternoon" }
  ],

  section17: [
    { jp: "ご機嫌いかがですか？―元気です。ありがとうございます。", en: "How are you? — I am fine, thank you." },
    { jp: "本社の皆さんは元気ですか？", en: "How is everyone at the headquarters?" },
    { jp: "あなたはどうやって事務所に来ますか？―地下鉄できます。", en: "How do you come to the office? — I come by subway." },
    { jp: "あなたはどうやってこのウェブサイトを更新しますか？", en: "How do you update this website?" },
    { jp: "あなたはどうやってこれらの画像をアップロードしますか？", en: "How do you upload these images?" },
    { jp: "あなたはどうやってこの書式を提出しますか？", en: "How do you submit this form?" },
    { jp: "彼らはどうやってそのチームを訓練しますか？", en: "How do they train the team?" },
    { jp: "あなた方の従業員はお元気ですか？―元気です。", en: "How are your employees? — They are fine." },
    { jp: "あなたはどうやってその請求書を支払うのですか？", en: "How do you pay the bills?" },
    { jp: "上海での売り上げはどうですか？", en: "How are the sales in Shanghai?" }
  ],

  section18: [
    { jp: "あなたはおいくつですか？", en: "How old are you?" },
    { jp: "その市庁舎はどのくらい古いのですか？", en: "How old is the city hall?" },
    { jp: "あのクローゼットはどのくらい背が高いのですか？", en: "How tall is that closet?" },
    { jp: "その映画館はここからどのくらい遠いですか？", en: "How far is the movie theater from here?" },
    { jp: "この電子レンジはいくらですか？", en: "How much is this microwave oven?" },
    { jp: "面接はどのくらい長いのですか？―15分くらいです。", en: "How long is the interview? — It is about fifteen minutes long." },
    { jp: "これらの芸術作品はどのくらい古いのですか？―150年くらいです。", en: "How old are these works of art? — They are about 150 years old." },
    { jp: "それらの本棚はどれくらい背が高いのですか？―2メーターです。", en: "How tall are those bookshelves? — They are two meters ." },
    { jp: "そのレンタル料金はいくらですか？―500円です。", en: "How much is the rental fee? — It is 500 yen." },
    { jp: "彼女のプレゼンはどのくらい長いのですか？―30分くらいです。", en: "How long is her presentation? — It is about thirty minutes." }
  ],

  section19: [
    { jp: "誰がこの打合せルームを掃除するのですか？", en: "Who cleans this meeting room?" },
    { jp: "誰がそのウェブサイトを更新するのですか？", en: "Who updates the website?" },
    { jp: "誰がその大学でマーケティングを教えますか？", en: "Who teaches marketing at the college?" },
    { jp: "誰がこの洗濯機を使いますか？", en: "Who uses this washing machine?" },
    { jp: "誰がよくその受付係に電話しますか？", en: "Who often calls the receptionist?" },
    { jp: "誰が毎月その請求書を支払うのですか？― 私たちのマネージャーです。", en: "Who pays the bill every month? — Our manager does." },
    { jp: "誰がよくあなたにテキストメッセージを送りますか？― 事務所のみんなです。", en: "Who often texts you? — Everyone at the office does." },
    { jp: "誰がその冷蔵庫を使うのですか？― 事務所のみんなです。", en: "Who uses the refrigerator? — Everyone at the office does." },
    { jp: "誰がこのパンフレットを欲しいのですか？― 多くのお客さんです。", en: "Who wants this brochure? — Many customers do." },
    { jp: "誰がこの部署を管理するのですか？― 私がします。", en: "Who manages this department? — I do." }
  ],

  section20: [
    { jp: "あなたはこのファイルを開くことができますか？", en: "Can you open this file?" },
    { jp: "テッドは上手にビジネスレターを書くことができる。", en: "Ted can write business letters well." },
    { jp: "私は掃除機を修理することができます。", en: "I can repair vacuum cleaners." },
    { jp: "彼女はこの会計ソフトを使えません。", en: "She can't use this accounting software." },
    { jp: "あなたは中国向けのその請求書を作ることができますか？", en: "Can you make the invoice for China?" },
    { jp: "あのインターンたちはその倉庫で働くことができますか？", en: "Can those interns work in the warehouse?" },
    { jp: "私たちは毎日何ポイントを貯めることができますか？― 毎日5ポイントを貯めることができます。", en: "How many points can we save every day? — You can save five points every day." },
    { jp: "ロバートはこの報告書を日曜日までに終わらせることができますか？", en: "Can Robert finish this report by Sunday?" },
    { jp: "その応募者は何をすることができますか？", en: "What can the applicant do?" },
    { jp: "私はどこで私たちの予算を確認することができますか？― こちらで確認できます。", en: "Where can I check our budget? — You can check it here." }
  ],

  section21: [
    { jp: "私は、私の作業予定を確認しているところです。", en: "I'm checking my work schedule." },
    { jp: "あなたは今、休憩をとっているのですか？", en: "Are you taking a break now?" },
    { jp: "私の仕事仲間は研究室で働いているところです。", en: "My coworkers are working in the laboratory." },
    { jp: "あなたはここで何をしているのですか？", en: "What are you doing here?" },
    { jp: "彼女は会議室で何をしているのですか？", en: "What is she doing in the conference room?" },
    { jp: "彼はどこでトレーニングをしているのですか？― あの手すりのそばです。", en: "Where is he training? — He is training by that railing." },
    { jp: "彼女は今、何をアンインストールしているのですか？― この会計ソフトです。", en: "What is she uninstalling now? — She is uninstalling this accounting software." },
    { jp: "あなたたちは何を運んでいるのですか？― 電子レンジです。", en: "What are you carrying? — We're carrying a microwave oven." },
    { jp: "その整備士とその秘書は何をしているのですか？― そのコピー機をチェックしています。", en: "What are the mechanic and the secretary doing? — They are checking the copy machine." },
    { jp: "彼らはその事務用家具を配置しているところです。", en: "They are arranging the office furniture." }
  ],

  section22: [
    { jp: "棚の上の方に時計があります。", en: "There is a clock on the shelf." },
    { jp: "その引き出しの中にたくさんの書類があります。", en: "There are many documents in the drawer." },
    { jp: "このプロジェクトにはいくらかリスクがありますか？", en: "Are there any risks in this project?" },
    { jp: "その乗り物の中にいくつ植木鉢がありますか？", en: "How many flower pots are there in the vehicle?" },
    { jp: "今日は直行便が2便しかありません。", en: "There are only two direct flights today." },
    { jp: "そのキャビネットにはノートパソコンがいくつありますか？", en: "How many laptops are there in the cabinet?" },
    { jp: "その店には電化製品が一つもありません。", en: "There aren't any appliances in the store." },
    { jp: "色の選択肢はいくつありますか？― 15の選択肢があります。", en: "How many color options are there? — There are fifteen options." },
    { jp: "何かいい提案はありますか？", en: "Are there any good suggestions?" },
    { jp: "この部署には一人も外国人の従業員はいません。", en: "There aren't any foreign employees in this department." }
  ],

  section23: [
    { jp: "彼のふるまいは良かった。", en: "His behavior was good." },
    { jp: "彼女はその時、対応可能でした。", en: "She was available then." },
    { jp: "その男性は金曜日に残業した。", en: "The man worked overtime on Friday." },
    { jp: "あなたはいつその吸収合併のニュースを聞きましたか？", en: "When did you hear the merger news?" },
    { jp: "私たちはそのアポをキャンセルしました。", en: "We canceled the appointment." },
    { jp: "彼らは昼食時の打合せで何について話しましたか？", en: "What did they talk about at the lunchtime meeting?" },
    { jp: "その会計士はどうやって空港まで行きましたか？― 彼はバスで行きました。", en: "How did the accountant go to the airport? — He went there by bus." },
    { jp: "その研究所にはたくさんの道具がありました。", en: "There were many tools in the laboratory." },
    { jp: "あなたは昨日の夕方、どこにいましたか？― 宴会場にいました。", en: "Where were you yesterday evening? — I was at a banquet hall." },
    { jp: "この動画は去年韓国でとても人気でした。", en: "This video was very popular in South Korea last year." }
  ],

  section24: [
    { jp: "そのマネージャーはカフェで休んでいるところでした。", en: "The manager was resting in a cafe." },
    { jp: "あなたは売上報告書を書いているところでしたか？", en: "Were you writing a sales report?" },
    { jp: "その電気工は3時間前に何をしていましたか？", en: "What was the electrician doing three hours ago?" },
    { jp: "あの長椅子に座っていたのは誰ですか？", en: "Who was sitting on that couch?" },
    { jp: "あなたはジャケットを試着しているところでしたか？", en: "Were you trying on jackets?" },
    { jp: "その時、彼らは予算について話し合っていなかった。", en: "They were not discussing the budget then." },
    { jp: "あなたは何を探していましたか？― その価格表を探していました。", en: "What were you looking for? — I was looking for the price list." },
    { jp: "彼は何を見直していましたか？― 彼は年金プランを見直していました。", en: "What was he reviewing? — He was reviewing the pension plan." },
    { jp: "なぜその整備士たちはロビーに立っていたのですか？", en: "Why were the mechanics standing in the lobby?" },
    { jp: "その時、私はフライトの予約をしているところでした。", en: "I was booking a flight then." }
  ],

  section25: [
    { jp: "私たちがその新しい発電所を建てた時、私たちはとても忙しかった。", en: "When we built the new power plant, we were very busy." },
    { jp: "私たちがその製品の在庫を確認した時、それは欠品でした。", en: "When we checked the inventory of the product, it was out of stock." },
    { jp: "そのお客さんが私の助手に電話した時、私は対応可能だった。", en: "When the customer called my assistant, I was available." },
    { jp: "その器具が到着した時、彼らは倉庫にいた。", en: "When the equipment arrived, they were in the warehouse." },
    { jp: "仕事をするとき、ロバートはこの施設を使いますか？", en: "Does Robert use this facility when he works?" },
    { jp: "その配達員が来た時、私の同僚はオンラインでおしゃべりをしているところだった。", en: "My colleague was chatting online when the delivery person came." },
    { jp: "若い頃、彼女は校正者だった。", en: "She was a proofreader when she was young." },
    { jp: "あなたがその明細つき請求書を受け取ったら、私に連絡してください。", en: "Please contact me when you receive the itemized invoice." },
    { jp: "彼女たちが打合せをした時、太田さんは休憩をとっているところだった。", en: "Ms. Ota was taking a break when they had a meeting." },
    { jp: "そのシステム障害が起きたとき、あなたはどこにいましたか？", en: "Where were you when the system failure happened?" }
  ],

  section26: [
    { jp: "彼女の販売促進計画は完璧に聞こえる。", en: "Her promotion plan sounds perfect." },
    { jp: "あれは素晴らしく聞こえる。", en: "That sounds great." },
    { jp: "あれはそんなに悪く見えない。", en: "That doesn't look so bad." },
    { jp: "そのプレゼンの前、彼は緊張しているように見えた。", en: "He looked nervous before the presentation." },
    { jp: "彼は、息子が外交官になったとき、とても幸せに感じた。", en: "He felt very happy when his son became a diplomat." },
    { jp: "その観光客たちは、その天気予報を見たとき、とても悲しく思った。", en: "The tourists got very sad when they saw the weather forecast." },
    { jp: "その外科医はアメリカで有名になった。", en: "The surgeon became famous in the U.S." },
    { jp: "あの電気自動車はその国では人気にはならなかった。", en: "That electric vehicle didn't become popular in the country." },
    { jp: "あの信号が黄色になった。", en: "That traffic light turned yellow." },
    { jp: "彼は、同じ失敗をした時、青くなった。", en: "When he made the same mistake, he turned pale." }
  ],

  section27: [
    { jp: "そのコンサルタントは彼らに助言を与えた。", en: "The consultant gave advice to them." },
    { jp: "彼は聴衆に1枚の写真を見せた。", en: "He showed a photo to the audience." },
    { jp: "その社員名簿を彼にあげてください。", en: "Please give the company directory to him." },
    { jp: "宣伝部のアンディがあなたに英語を教えているのですか？", en: "Does Andy in the advertising department teach English to you?" },
    { jp: "彼女はあなたにそのレンタル料金を貸してくれましたか。", en: "Did she lend the rental fee to you?" },
    { jp: "スミスさんが私たちにコーヒーを入れてくれた。", en: "Mr. Smith made some coffee for us." },
    { jp: "アランは彼女にそのニュースの詳細を教えていましたか？", en: "Did Allan tell the details of the news to her?" },
    { jp: "彼女は私の同僚にその契約書を見せた。", en: "She showed the contract to my colleague." },
    { jp: "その銀行はその建設会社にいくら貸したのですか？", en: "How much did the bank lend to the construction company?" },
    { jp: "法務部の田中さんは彼女の家族のために家を買った。", en: "Ms. Tanaka in the legal department bought a house for her family." }
  ],

  section28: [
    { jp: "彼らは私に私の小包を送った。", en: "They sent me my parcel." },
    { jp: "金曜日、みんなにこの知らせを送ってください。", en: "Please send everyone this notice on Friday." },
    { jp: "あなたに時間があるとき、私たちに電話してください。", en: "Please give us a call when you have time." },
    { jp: "そのボランティアたちが彼らに熱い紅茶を入れた。", en: "The volunteers made them some hot tea." },
    { jp: "彼はあなたに統計学を教えているのですか？", en: "Does he teach you statistics?" },
    { jp: "その講演者は聴衆に1枚の図表を見せた。", en: "The speaker showed the audience a chart." },
    { jp: "私にあなたの注文番号を教えてください。", en: "Please tell me your order number." },
    { jp: "その男性はその市の職員に彼の身分証を見せた。", en: "The man showed the city official his ID." },
    { jp: "彼らは彼女に良い解決策を与えた。", en: "They gave her a good solution." },
    { jp: "私は昨日、あなたにその招待状を送りました。", en: "I sent you the invitation yesterday." }
  ]

};