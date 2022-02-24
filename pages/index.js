import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

export default function Home() {
  return (
    <div className={`${style.home_all}`}>
      <Head>
        <title>タイトルタイトル</title>
        <meta name="description" content="説明説明説明" />
      </Head>

      {/* ヘッダー
      ------------------------------------------------- */}

      <header className={`${style.header}`}>
        <div className={`${style.hd_title_area}`}>
          <div className={`${style.hd_title}`}>
            <a className={`${style.hd_title_link} ${style.nextImg}`}>
              <Image src="/logo1.svg" width={353.71} height={82.53} />
            </a>
          </div>
          <span className={`${style.hd_line}`}></span>
          <div className={`${style.hd_today}`}>
            <AccountBalanceOutlinedIcon style={{ marginRight: "17.45" }} />
            <p className={`${style.hd_today_txt}`}>本日開館中</p>
          </div>

          <div className={`${style.hd_language}`}>
            <p>Language</p>
            <ArrowDropDownIcon />
          </div>
        </div>
        <nav className={`${style.hd_nav}`}>
          <ul className={`${style.hd_list}`}>
            <li className={`${style.hd_list_item}`}>体験プログラム</li>
            <li className={`${style.hd_list_item}`}>企画展・イベント</li>
            <li className={`${style.hd_list_item}`}>入居者紹介</li>
            <li className={`${style.hd_list_item}`}>
              ご利用案内
              <KeyboardArrowDownIcon
                style={{
                  verticalAlign: "top",
                  fontSize: "medium",
                  margin: "4px 0 0 8px",
                }}
              />
            </li>
            <li className={`${style.hd_list_item}`}>
              おきなわ工芸の杜について
              <KeyboardArrowDownIcon
                style={{
                  verticalAlign: "top",
                  fontSize: "medium",
                  margin: "4px 0 0 8px",
                }}
              />
            </li>
            <li className={`${style.hd_list_item}`}>お知らせ</li>
            <li className={`${style.hd_list_item}`}>
              <MenuIcon style={{ verticalAlign: "top" }} />
            </li>
          </ul>
        </nav>
        <nav className={`${style.hd_breadcrumb}`}>
          <ul className={`${style.breadcrumb}`}>
            <li>
              <a href="#">ホーム /</a>
            </li>
            <li>
              <a href="#">パンくず /</a>
            </li>
            <li>
              <a href="#">パンくず</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* メイン
      ------------------------------------------------- */}

      <main className={`${style.main}`}>
        {/* メインビジュアル */}
        <section className={`${style.mainVisual}`}>
          <div className={`${style.mainVisual_title_wrapp}`}>
            <span className={`${style.mainVisual_title_subTxt01}`}>開催中</span>

            <span className={`${style.mainVisual_title_subTxt02}`}>
              企画展・イベント
            </span>
            <h1 className={`${style.mainVisual_title}`}>やちむんの里展示会</h1>
          </div>
          <div className={`${style.mainVisual_img} ${style.nextImg}`}>
            <Image
              src="/main-visual.jpeg"
              width={796.36}
              height={542.63}
              objectFit={"cover"}
            />
          </div>

          {/* 説明h2 */}
          <div className={`${style.mainVisual_explanation_wrapp}`}>
            <h2 className={`${style.mainVisual_explanation}`}>
              短い紹介文（50〜80文字程度）短い紹介文（50〜80文字程度）短い紹介文（50〜80文字程度）短い紹介文（50〜80文字程度）
            </h2>
          </div>

          {/* 内容 */}
          <div className={`${style.mainVisual_read_wrapp}`}>
            <div className={`${style.mainVisual_read}`}>
              <p>
                詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)
              </p>

              <p className={`${style.mainVisual_read_item}`}>
                詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文
              </p>

              <p className={`${style.mainVisual_read_item}`}>
                (600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)詳細な紹介文(600〜1000
                文字程度もしくは引用できるウェブサイトURLなど)
              </p>
            </div>
          </div>

          {/* 詳細情報 */}
          <div className={`${style.mainVisual_info_box}`}>
            {/* 箱 */}
            <div className={`${style.mainVisual_info_wrapp}`}>
              {/* flex */}
              <ul
                className={`${style.mainVisual_info}${style.mainVisual_info_fw}`}
              >
                <li className={`${style.mainVisual_info_item}`}>会期</li>
                <li className={`${style.mainVisual_info_item}`}>場所</li>
                <li className={`${style.mainVisual_info_item}`}>料金</li>
                <li className={`${style.mainVisual_info_item}`}>主催</li>
                <li className={`${style.mainVisual_info_item}`}>協力</li>
                <li className={`${style.mainVisual_info_item}`}>後援</li>
                <li className={`${style.mainVisual_info_item}`}>備考</li>
              </ul>
              <span>（縦棒0＊507．53）</span>
              <ul className={`${style.mainVisual_info}`}>
                <li className={`${style.mainVisual_info_item}`}>
                  2021年6月1日〜6月20日
                </li>
                <li className={`${style.mainVisual_info_item}`}>展示室A</li>
                <li className={`${style.mainVisual_info_item}`}>無料</li>
                <li className={`${style.mainVisual_info_item}`}>
                  主催情報主催情報主催情報主催情報主催情報主催情報
                </li>
                <li className={`${style.mainVisual_info_item}`}>
                  協力情報協力情報協力情報協力情報協力情報協力情報協力情報協力情報
                </li>
                <li className={`${style.mainVisual_info_item}`}>
                  後援情報後援情報後援情報後援情報後援情報後援情報後援情報
                </li>
                <li className={`${style.mainVisual_info_item}`}>
                  備考情報がはいります備考情報がはいります備考情報がはいります備考情報がはいります
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 主な展示品 */}
        <section className={`${style.gallery}`}>
          <h2 className={`${style.gallery_title}`}>主な展示品</h2>
          <div className={`${style.gallery_sub_box}`}>
            <span className={`${style.gallery_sub_round}`}>
              （まる::befor）
            </span>
          </div>
          {/* ギャラリーアイテム */}
          <div className={`${style.gallery_item}`}>
            <div className={`${style.gallery_img} ${style.nextImg}`}>
              <Image
                src="/item.jpeg"
                width={408.32}
                height={288.33}
                objectFit={"cover"}
              />
            </div>
            <span className={`${style.gallery_item_title}`}>工芸品</span>
            <p className={`${style.gallery_item_read}`}>
              工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。
            </p>
          </div>
          <div className={`${style.gallery_item}`}>
            <div className={`${style.gallery_img} ${style.nextImg}`}>
              <Image
                src="/item.jpeg"
                width={408.32}
                height={288.33}
                objectFit={"cover"}
              />
            </div>
            <span className={`${style.gallery_item_title}`}>工芸品</span>
            <p className={`${style.gallery_item_read}`}>
              工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。
            </p>
          </div>
          <div className={`${style.gallery_item}`}>
            <div className={`${style.gallery_img} ${style.nextImg}`}>
              <Image
                src="/item.jpeg"
                width={408.32}
                height={288.33}
                objectFit={"cover"}
              />
            </div>
            <span className={`${style.gallery_item_title}`}>工芸品</span>
            <p className={`${style.gallery_item_read}`}>
              工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。
            </p>
          </div>
          <div className={`${style.gallery_item}`}>
            <div className={`${style.gallery_img} ${style.nextImg}`}>
              <Image
                src="/item.jpeg"
                width={408.32}
                height={288.33}
                objectFit={"cover"}
              />
            </div>
            <span className={`${style.gallery_item_title}`}>工芸品</span>
            <p className={`${style.gallery_item_read}`}>
              工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。
            </p>
          </div>
          <div className={`${style.gallery_item}`}>
            <div className={`${style.gallery_img} ${style.nextImg}`}>
              <Image
                src="/item.jpeg"
                width={408.32}
                height={288.33}
                objectFit={"cover"}
              />
            </div>
            <span className={`${style.gallery_item_title}`}>工芸品</span>
            <p className={`${style.gallery_item_read}`}>
              工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。
            </p>
          </div>
          <div className={`${style.gallery_item}`}>
            <div className={`${style.gallery_img} ${style.nextImg}`}>
              <Image
                src="/item.jpeg"
                width={408.32}
                height={288.33}
                objectFit={"cover"}
              />
            </div>
            <span className={`${style.gallery_item_title}`}>工芸品</span>
            <p className={`${style.gallery_item_read}`}>
              工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。
            </p>
          </div>
          <div className={`${style.gallery_item}`}>
            <div className={`${style.gallery_img} ${style.nextImg}`}>
              <Image
                src="/item.jpeg"
                width={408.32}
                height={288.33}
                objectFit={"cover"}
              />
            </div>
            <span className={`${style.gallery_item_title}`}>工芸品</span>
            <p className={`${style.gallery_item_read}`}>
              工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。
            </p>
          </div>
          <div className={`${style.gallery_item}`}>
            <div className={`${style.gallery_img} ${style.nextImg}`}>
              <Image
                src="/item.jpeg"
                width={408.32}
                height={288.33}
                objectFit={"cover"}
              />
            </div>
            <span className={`${style.gallery_item_title}`}>工芸品</span>
            <p className={`${style.gallery_item_read}`}>
              工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。
            </p>
          </div>
          <div className={`${style.gallery_item}`}>
            <div className={`${style.gallery_img} ${style.nextImg}`}>
              <Image
                src="/item.jpeg"
                width={408.32}
                height={288.33}
                objectFit={"cover"}
              />
            </div>
            <span className={`${style.gallery_item_title}`}>工芸品</span>
            <p className={`${style.gallery_item_read}`}>
              工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。50文字〜80文字程度工芸品の紹介文がはいります。
            </p>
          </div>
        </section>

        {/* その他リンク */}
        <section className={`${style.others}`}>
          <div className={`${style.others_item}`}>
            <div className={`${style.others_img} ${style.nextImg}`}>
              <Image
                src="/item.jpeg"
                width={358.36}
                height={144.93}
                objectFit={"cover"}
              />
            </div>
            {/* relative */}
            <span className={`${style.others＿button}`}>
              （ボタンの挿入）
            </span>{" "}
            {/* absolute */}
            <span className={`${style.others_read}`}>
              おきなわ伝統工芸サポーターズWEB
            </span>{" "}
            {/* absolute */}
          </div>
          <div className={`${style.others_item}`}>
            <div className={`${style.others_img} ${style.nextImg}`}>
              <Image
                src="/item.jpeg"
                width={358.36}
                height={144.93}
                objectFit={"cover"}
              />
            </div>
            {/* relative */}
            <span className={`${style.others＿button}`}>
              （ボタンの挿入）
            </span>{" "}
            {/* absolute */}
            <span className={`${style.others_read}`}>
              おきなわ伝統工芸サポーターズWEB
            </span>{" "}
            {/* absolute */}
          </div>
          <div className={`${style.others_item}`}>
            <div className={`${style.others_img} ${style.nextImg}`}>
              <Image
                src="/item.jpeg"
                width={358.36}
                height={144.93}
                objectFit={"cover"}
              />
            </div>
            {/* relative */}
            <span className={`${style.others＿button}`}>
              （ボタンの挿入）
            </span>{" "}
            {/* absolute */}
            <span className={`${style.others_read}`}>
              おきなわ工芸なび
            </span>{" "}
            {/* absolute */}
          </div>
        </section>

        {/* おきなわ工芸の杜について */}
        <section className={`${style.about}`}>
          <div className={`${style.about_img} ${style.nextImg}`}>
            <Image src="/about.jpeg" width={1700} height={572.28} />
          </div>
          {/* relative */}
          <div className={`${style.about_box}`}>
            {" "}
            {/* flex , absolute */}
            <div className={`${style.about_txt_box}`}>
              <h2 className={`${style.about_txt_title}`}>
                おきなわ工芸の杜について
              </h2>
              <p className={`${style.about_txt}`}>
                当施設の基本情報や伝統工芸品の歴史、『おきなわ工芸の杜』が果たしたい役割について紹介しています。
              </p>
              <button>くわしくみる</button>
            </div>
            <div className={`${style.about_access_box}`}>
              <div>（マップ）</div>
              <button>交通アクセス</button>
              <button>大きい地図で見る</button>
            </div>
          </div>
        </section>
      </main>

      {/* フッター
      ------------------------------------------------- */}

      <footer className={`${style.footer}`}>
        <div className={`${style.ft_content_box}`}>
          <nav className={`${style.ft_nav}`}>
            <ul className={`${style.ft_list}`}>
              <li className={`${style.ft_list_item}`}>体験プログラム</li>
              <li className={`${style.ft_list_item}`}>企画展・イベント</li>
              <li className={`${style.ft_list_item}`}>入居者紹介</li>
              <li className={`${style.ft_list_item}`}>ご利用案内</li>
              <li className={`${style.ft_list_item}`}>
                当施設のご利用について
              </li>
            </ul>
          </nav>

          <nav className={`${style.ft_nav}`}>
            <ul className={`${style.ft_list}`}>
              <li className={`${style.ft_list_item}`}>交通アクセス</li>
              <li className={`${style.ft_list_item}`}>フロアマップ</li>
              <li className={`${style.ft_list_item}`}>
                入居のご案内(体験工房)
              </li>
              <li className={`${style.ft_list_item}`}>
                入居のご案内(貸し工房)
              </li>
              <li className={`${style.ft_list_item}`}>借りたい・使いたい</li>
            </ul>
          </nav>

          <nav className={`${style.ft_nav}`}>
            <ul className={`${style.ft_list}`}>
              <li className={`${style.ft_list_item}`}>
                おきなわ工芸の杜について
              </li>
              <li className={`${style.ft_list_item}`}>施設概要</li>
              <li className={`${style.ft_list_item}`}>施設の楽しみ方</li>
              <li className={`${style.ft_list_item}`}>工芸サポート事業</li>
              <li className={`${style.ft_list_item}`}>お知らせ</li>
            </ul>
          </nav>

          <div className={`${style.ft_logo}`}>
            <div className={`${style.ft_logo_img}`}>
              <Image src="/logo1.svg" width={416.22} height={106.11} />
            </div>
            <button>フロアマップ</button>
            <button>お問い合わせ</button>
          </div>
        </div>

        <div className={`${style.ft_others}`}>
          <ul className={`${style.ft_others_list}`}>
            <li>
              <a>お問い合わせ</a>
            </li>
            <li>
              <a>個人情報の取り扱い</a>
            </li>
            <li>
              <a>このサイトについて</a>
            </li>
          </ul>
          <div className={`${style.ft_others_cp}`}>
            <small>© 2021 おきなわ工芸の杜</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
