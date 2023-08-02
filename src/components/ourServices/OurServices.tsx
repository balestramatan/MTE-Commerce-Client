import React from "react";
import ourServicesourServicesStyle from "./OurServices.module.scss";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

interface Iprops {}

const OurServices = (props: Iprops) => {
  const {} = props;

  return (
    <div className={ourServicesourServicesStyle.ourServicesContainer}>
      <div className={ourServicesourServicesStyle.ourServicesTitleContainer}>
        <span>השירותים שלנו</span>
      </div>
      <div className={ourServicesourServicesStyle.ourServicesContextContainer}>
        <div className={ourServicesourServicesStyle.ourServicescolumnContainer}>
          <div className={ourServicesourServicesStyle.iconContainer}>
            <LocalGroceryStoreIcon
              className={ourServicesourServicesStyle.ourServicesIcons}
            />
          </div>
          <span className={ourServicesourServicesStyle.ourServicesTitleText}>
            חנות
          </span>
          <span
            className={ourServicesourServicesStyle.ourServicesDescriptionText}
          >
            ברוך הבא לסמוקטוק! אנחנו מספקים מגוון מוצרים ואביזרים הקשורים לעולם
            הטבק והעישון. בחנות שלנו, תוכל למצוא מבחר רחב של סיגריות, סיגרים,
            טבק לסיגריה ומגוון רחב של נוזלים ואביזרים לוויפה ועישון חוויתיים.
            אנו מתחייבים לאיכות גבוהה ולספק מוצרים מובטחים ובתקציבים שונים. צוות
            החנות שלנו מקפיד על ייעוץ אישי ומקצועי כדי להבטיח שלקוחותינו ימצאו
            את המוצרים שמתאימים בצורה הטובה ביותר לצרכיהם. אנו נשמח לראותך בחנות
            ולספק לך את השירות הטוב ביותר בתחום!
          </span>
        </div>
        <div className={ourServicesourServicesStyle.ourServicescolumnContainer}>
          <div className={ourServicesourServicesStyle.iconContainer}>
            <DeliveryDiningIcon
              className={ourServicesourServicesStyle.ourServicesIcons}
            />
          </div>
          <span className={ourServicesourServicesStyle.ourServicesTitleText}>
            שירות משלוחים
          </span>
          <span
            className={ourServicesourServicesStyle.ourServicesDescriptionText}
          >
            שירות משלוחים מהיר ואמין! אנחנו מציעים שירות משלוחים מעולה עבורך.
            תיהנה ממשלוח מהיר ובטוח ליעדים שונים ברחבי הארץ. צוות המשלוחים שלנו
            מוקפא במקצועיות ואחריות, ואנחנו מקדישים תשומת לב מרבית כדי לוודא
            שהזמנתך מגיעה במדויק ובמצב מצוין. היכולת שלנו לשלוח ביעדים מרובים
            ובכמויות גדולות או קטנות, מאפשרת לך לבחור את האפשרות המתאימה ביותר
            לצרכיך.
          </span>
        </div>
        <div className={ourServicesourServicesStyle.ourServicescolumnContainer}>
          <div className={ourServicesourServicesStyle.iconContainer}>
            <HeadsetMicIcon
              className={ourServicesourServicesStyle.ourServicesIcons}
            />
          </div>
          <span className={ourServicesourServicesStyle.ourServicesTitleText}>
            שירות לקוחות
          </span>
          <span
            className={ourServicesourServicesStyle.ourServicesDescriptionText}
          >
            שירות לקוחות מהווה חלק בלתי נפרד מאתרנו. אנחנו מתחייבים לספק חוויה
            מעולה ללקוחותינו בכל שלב בדרך. הקהל שלנו הוא בפוקוס הגבוה ביותר
            ואנחנו מאמינים באמינות ושירות ברמה הגבוהה ביותר. צוות השירות לקוחות
            שלנו זמין לעזור ולתמוך בך בכל שאלה, בקשה או בעיה שיש לך. אנחנו
            מאמינים שהלקוחות הם הלב של העסק ואנו נמשיך להשקיע מאמצים רבים כדי
            להבטיח שתקבלו את השירות הטוב ביותר והמותאם באופן אישי. אנו נמשיך
            להאזין לצרכייך ולשפר ולפתח את השירותים שלנו על מנת להציע לכם את
            החוויה הטובה ביותר עם כל פנייה אלינו.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
