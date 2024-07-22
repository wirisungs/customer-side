import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg 
       width="66" height="59" 
       viewBox="0 0 66 59" fill="none" 
       xmlns="http://www.w3.org/2000/svg">
    <Path d="M18.7617 42.3125V48H18.0039L15.1406 43.6133V48H14.3867V42.3125H15.1406L18.0156 46.7109V42.3125H18.7617ZM20.7109 42V48H19.9883V42H20.7109ZM20.5391 45.7266L20.2383 45.7148C20.2409 45.4258 20.2839 45.1589 20.3672 44.9141C20.4505 44.6667 20.5677 44.4518 20.7188 44.2695C20.8698 44.0872 21.0495 43.9466 21.2578 43.8477C21.4688 43.7461 21.7018 43.6953 21.957 43.6953C22.1654 43.6953 22.3529 43.724 22.5195 43.7812C22.6862 43.8359 22.8281 43.9245 22.9453 44.0469C23.0651 44.1693 23.1562 44.3281 23.2188 44.5234C23.2812 44.7161 23.3125 44.9518 23.3125 45.2305V48H22.5859V45.2227C22.5859 45.0013 22.5534 44.8242 22.4883 44.6914C22.4232 44.556 22.3281 44.4583 22.2031 44.3984C22.0781 44.3359 21.9245 44.3047 21.7422 44.3047C21.5625 44.3047 21.3984 44.3424 21.25 44.418C21.1042 44.4935 20.9779 44.5977 20.8711 44.7305C20.7669 44.8633 20.6849 45.0156 20.625 45.1875C20.5677 45.3568 20.5391 45.5365 20.5391 45.7266ZM26.8867 47.2773V45.1016C26.8867 44.9349 26.8529 44.7904 26.7852 44.668C26.7201 44.543 26.6211 44.4466 26.4883 44.3789C26.3555 44.3112 26.1914 44.2773 25.9961 44.2773C25.8138 44.2773 25.6536 44.3086 25.5156 44.3711C25.3802 44.4336 25.2734 44.5156 25.1953 44.6172C25.1198 44.7188 25.082 44.8281 25.082 44.9453H24.3594C24.3594 44.7943 24.3984 44.6445 24.4766 44.4961C24.5547 44.3477 24.6667 44.2135 24.8125 44.0938C24.9609 43.9714 25.138 43.875 25.3438 43.8047C25.5521 43.7318 25.7839 43.6953 26.0391 43.6953C26.3464 43.6953 26.6172 43.7474 26.8516 43.8516C27.0885 43.9557 27.2734 44.1133 27.4062 44.3242C27.5417 44.5326 27.6094 44.7943 27.6094 45.1094V47.0781C27.6094 47.2188 27.6211 47.3685 27.6445 47.5273C27.6706 47.6862 27.7083 47.8229 27.7578 47.9375V48H27.0039C26.9674 47.9167 26.9388 47.806 26.918 47.668C26.8971 47.5273 26.8867 47.3971 26.8867 47.2773ZM27.0117 45.4375L27.0195 45.9453H26.2891C26.0833 45.9453 25.8997 45.9622 25.7383 45.9961C25.5768 46.0273 25.4414 46.0755 25.332 46.1406C25.2227 46.2057 25.1393 46.2878 25.082 46.3867C25.0247 46.4831 24.9961 46.5964 24.9961 46.7266C24.9961 46.8594 25.026 46.9805 25.0859 47.0898C25.1458 47.1992 25.2357 47.2865 25.3555 47.3516C25.4779 47.4141 25.6276 47.4453 25.8047 47.4453C26.026 47.4453 26.2214 47.3984 26.3906 47.3047C26.5599 47.2109 26.694 47.0964 26.793 46.9609C26.8945 46.8255 26.9492 46.694 26.957 46.5664L27.2656 46.9141C27.2474 47.0234 27.1979 47.1445 27.1172 47.2773C27.0365 47.4102 26.9284 47.5378 26.793 47.6602C26.6602 47.7799 26.5013 47.8802 26.3164 47.9609C26.1341 48.0391 25.9284 48.0781 25.6992 48.0781C25.4128 48.0781 25.1615 48.0221 24.9453 47.9102C24.7318 47.7982 24.5651 47.6484 24.4453 47.4609C24.3281 47.2708 24.2695 47.0586 24.2695 46.8242C24.2695 46.5977 24.3138 46.3984 24.4023 46.2266C24.4909 46.0521 24.6185 45.9076 24.7852 45.793C24.9518 45.6758 25.1523 45.5872 25.3867 45.5273C25.6211 45.4674 25.8828 45.4375 26.1719 45.4375H27.0117ZM26.3359 42L27.3047 43.0664V43.1055H26.7031L26.1172 42.4453L25.5352 43.1055H24.9414V43.0625L25.8984 42H26.3359ZM25.3555 48.9609C25.3555 48.8438 25.3906 48.7448 25.4609 48.6641C25.5339 48.5833 25.6406 48.543 25.7812 48.543C25.9193 48.543 26.0247 48.5833 26.0977 48.6641C26.1732 48.7448 26.2109 48.8438 26.2109 48.9609C26.2109 49.0729 26.1732 49.168 26.0977 49.2461C26.0247 49.3268 25.9193 49.3672 25.7812 49.3672C25.6406 49.3672 25.5339 49.3268 25.4609 49.2461C25.3906 49.168 25.3555 49.0729 25.3555 48.9609ZM29.4688 44.6758V48H28.7461V43.7734H29.4297L29.4688 44.6758ZM29.2969 45.7266L28.9961 45.7148C28.9987 45.4258 29.0417 45.1589 29.125 44.9141C29.2083 44.6667 29.3255 44.4518 29.4766 44.2695C29.6276 44.0872 29.8073 43.9466 30.0156 43.8477C30.2266 43.7461 30.4596 43.6953 30.7148 43.6953C30.9232 43.6953 31.1107 43.724 31.2773 43.7812C31.444 43.8359 31.5859 43.9245 31.7031 44.0469C31.8229 44.1693 31.9141 44.3281 31.9766 44.5234C32.0391 44.7161 32.0703 44.9518 32.0703 45.2305V48H31.3438V45.2227C31.3438 45.0013 31.3112 44.8242 31.2461 44.6914C31.181 44.556 31.0859 44.4583 30.9609 44.3984C30.8359 44.3359 30.6823 44.3047 30.5 44.3047C30.3203 44.3047 30.1562 44.3424 30.0078 44.418C29.862 44.4935 29.7357 44.5977 29.6289 44.7305C29.5247 44.8633 29.4427 45.0156 29.3828 45.1875C29.3255 45.3568 29.2969 45.5365 29.2969 45.7266ZM35.875 42V48H35.1523V42H35.875ZM35.7031 45.7266L35.4023 45.7148C35.4049 45.4258 35.4479 45.1589 35.5312 44.9141C35.6146 44.6667 35.7318 44.4518 35.8828 44.2695C36.0339 44.0872 36.2135 43.9466 36.4219 43.8477C36.6328 43.7461 36.8659 43.6953 37.1211 43.6953C37.3294 43.6953 37.5169 43.724 37.6836 43.7812C37.8503 43.8359 37.9922 43.9245 38.1094 44.0469C38.2292 44.1693 38.3203 44.3281 38.3828 44.5234C38.4453 44.7161 38.4766 44.9518 38.4766 45.2305V48H37.75V45.2227C37.75 45.0013 37.7174 44.8242 37.6523 44.6914C37.5872 44.556 37.4922 44.4583 37.3672 44.3984C37.2422 44.3359 37.0885 44.3047 36.9062 44.3047C36.7266 44.3047 36.5625 44.3424 36.4141 44.418C36.2682 44.4935 36.1419 44.5977 36.0352 44.7305C35.931 44.8633 35.849 45.0156 35.7891 45.1875C35.7318 45.3568 35.7031 45.5365 35.7031 45.7266ZM42.0508 47.2773V45.1016C42.0508 44.9349 42.0169 44.7904 41.9492 44.668C41.8841 44.543 41.7852 44.4466 41.6523 44.3789C41.5195 44.3112 41.3555 44.2773 41.1602 44.2773C40.9779 44.2773 40.8177 44.3086 40.6797 44.3711C40.5443 44.4336 40.4375 44.5156 40.3594 44.6172C40.2839 44.7188 40.2461 44.8281 40.2461 44.9453H39.5234C39.5234 44.7943 39.5625 44.6445 39.6406 44.4961C39.7188 44.3477 39.8307 44.2135 39.9766 44.0938C40.125 43.9714 40.3021 43.875 40.5078 43.8047C40.7161 43.7318 40.9479 43.6953 41.2031 43.6953C41.5104 43.6953 41.7812 43.7474 42.0156 43.8516C42.2526 43.9557 42.4375 44.1133 42.5703 44.3242C42.7057 44.5326 42.7734 44.7943 42.7734 45.1094V47.0781C42.7734 47.2188 42.7852 47.3685 42.8086 47.5273C42.8346 47.6862 42.8724 47.8229 42.9219 47.9375V48H42.168C42.1315 47.9167 42.1029 47.806 42.082 47.668C42.0612 47.5273 42.0508 47.3971 42.0508 47.2773ZM42.1758 45.4375L42.1836 45.9453H41.4531C41.2474 45.9453 41.0638 45.9622 40.9023 45.9961C40.7409 46.0273 40.6055 46.0755 40.4961 46.1406C40.3867 46.2057 40.3034 46.2878 40.2461 46.3867C40.1888 46.4831 40.1602 46.5964 40.1602 46.7266C40.1602 46.8594 40.1901 46.9805 40.25 47.0898C40.3099 47.1992 40.3997 47.2865 40.5195 47.3516C40.6419 47.4141 40.7917 47.4453 40.9688 47.4453C41.1901 47.4453 41.3854 47.3984 41.5547 47.3047C41.724 47.2109 41.8581 47.0964 41.957 46.9609C42.0586 46.8255 42.1133 46.694 42.1211 46.5664L42.4297 46.9141C42.4115 47.0234 42.362 47.1445 42.2812 47.2773C42.2005 47.4102 42.0924 47.5378 41.957 47.6602C41.8242 47.7799 41.6654 47.8802 41.4805 47.9609C41.2982 48.0391 41.0924 48.0781 40.8633 48.0781C40.5768 48.0781 40.3255 48.0221 40.1094 47.9102C39.8958 47.7982 39.7292 47.6484 39.6094 47.4609C39.4922 47.2708 39.4336 47.0586 39.4336 46.8242C39.4336 46.5977 39.4779 46.3984 39.5664 46.2266C39.6549 46.0521 39.7826 45.9076 39.9492 45.793C40.1159 45.6758 40.3164 45.5872 40.5508 45.5273C40.7852 45.4674 41.0469 45.4375 41.3359 45.4375H42.1758ZM40.9375 42L41.6914 43.1484H41.0703L40.0625 42H40.9375ZM44.6328 44.6758V48H43.9102V43.7734H44.5938L44.6328 44.6758ZM44.4609 45.7266L44.1602 45.7148C44.1628 45.4258 44.2057 45.1589 44.2891 44.9141C44.3724 44.6667 44.4896 44.4518 44.6406 44.2695C44.7917 44.0872 44.9714 43.9466 45.1797 43.8477C45.3906 43.7461 45.6237 43.6953 45.8789 43.6953C46.0872 43.6953 46.2747 43.724 46.4414 43.7812C46.6081 43.8359 46.75 43.9245 46.8672 44.0469C46.987 44.1693 47.0781 44.3281 47.1406 44.5234C47.2031 44.7161 47.2344 44.9518 47.2344 45.2305V48H46.5078V45.2227C46.5078 45.0013 46.4753 44.8242 46.4102 44.6914C46.3451 44.556 46.25 44.4583 46.125 44.3984C46 44.3359 45.8464 44.3047 45.6641 44.3047C45.4844 44.3047 45.3203 44.3424 45.1719 44.418C45.026 44.4935 44.8997 44.5977 44.793 44.7305C44.6888 44.8633 44.6068 45.0156 44.5469 45.1875C44.4896 45.3568 44.4609 45.5365 44.4609 45.7266ZM51.0703 43.7734H51.7266V47.9102C51.7266 48.2826 51.651 48.6003 51.5 48.8633C51.349 49.1263 51.138 49.3255 50.8672 49.4609C50.599 49.599 50.2891 49.668 49.9375 49.668C49.7917 49.668 49.6198 49.6445 49.4219 49.5977C49.2266 49.5534 49.0339 49.4766 48.8438 49.3672C48.6562 49.2604 48.4987 49.1159 48.3711 48.9336L48.75 48.5039C48.9271 48.7174 49.112 48.8659 49.3047 48.9492C49.5 49.0326 49.6927 49.0742 49.8828 49.0742C50.112 49.0742 50.3099 49.0312 50.4766 48.9453C50.6432 48.8594 50.7721 48.7318 50.8633 48.5625C50.957 48.3958 51.0039 48.1901 51.0039 47.9453V44.7031L51.0703 43.7734ZM48.1602 45.9336V45.8516C48.1602 45.5286 48.1979 45.2357 48.2734 44.9727C48.3516 44.707 48.4622 44.4792 48.6055 44.2891C48.7513 44.099 48.9271 43.9531 49.1328 43.8516C49.3385 43.7474 49.5703 43.6953 49.8281 43.6953C50.0938 43.6953 50.3255 43.7422 50.5234 43.8359C50.724 43.9271 50.8932 44.0612 51.0312 44.2383C51.1719 44.4128 51.2826 44.6237 51.3633 44.8711C51.444 45.1185 51.5 45.3984 51.5312 45.7109V46.0703C51.5026 46.3802 51.4466 46.6589 51.3633 46.9062C51.2826 47.1536 51.1719 47.3646 51.0312 47.5391C50.8932 47.7135 50.724 47.8477 50.5234 47.9414C50.3229 48.0326 50.0885 48.0781 49.8203 48.0781C49.5677 48.0781 49.3385 48.0247 49.1328 47.918C48.9297 47.8112 48.7552 47.6615 48.6094 47.4688C48.4635 47.276 48.3516 47.0495 48.2734 46.7891C48.1979 46.526 48.1602 46.2409 48.1602 45.9336ZM48.8828 45.8516V45.9336C48.8828 46.1445 48.9036 46.3424 48.9453 46.5273C48.9896 46.7122 49.056 46.875 49.1445 47.0156C49.2357 47.1562 49.3516 47.2669 49.4922 47.3477C49.6328 47.4258 49.8008 47.4648 49.9961 47.4648C50.2357 47.4648 50.4336 47.4141 50.5898 47.3125C50.7461 47.2109 50.8698 47.0768 50.9609 46.9102C51.0547 46.7435 51.1276 46.5625 51.1797 46.3672V45.4258C51.151 45.2826 51.1068 45.1445 51.0469 45.0117C50.9896 44.8763 50.9141 44.7565 50.8203 44.6523C50.7292 44.5456 50.6159 44.4609 50.4805 44.3984C50.3451 44.3359 50.1862 44.3047 50.0039 44.3047C49.806 44.3047 49.6354 44.3464 49.4922 44.4297C49.3516 44.5104 49.2357 44.6224 49.1445 44.7656C49.056 44.9062 48.9896 45.0703 48.9453 45.2578C48.9036 45.4427 48.8828 45.6406 48.8828 45.8516Z" fill="#1C1C1C"/>
    <Path d="M44.25 8.75V15M21.75 8.75V21.4512C21.75 23.18 24.1825 24.2075 29.0462 26.2613C31 27.0875 31.9775 27.5 33 27.5V14.1937M36.75 23.75C36.75 23.75 37.8438 23.75 38.9375 26.25C38.9375 26.25 42.4125 20 45.5 18.75" 
       stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M25.5 15L28 16.25M39.25 5L26.75 11.25M28.4075 12.1137L24.7563 10.3475C22.7525 9.3775 21.75 8.8925 21.75 8.125C21.75 7.3575 22.7525 6.8725 24.7563 5.9025L28.4062 4.13625C30.6625 3.045 31.7875 2.5 33 2.5C34.2125 2.5 35.3387 3.045 37.5925 4.13625L41.2437 5.9025C43.2475 6.8725 44.25 7.3575 44.25 8.125C44.25 8.8925 43.2475 9.3775 41.2437 10.3475L37.5938 12.1137C35.3375 13.205 34.2125 13.75 33 13.75C31.7875 13.75 30.6613 13.205 28.4075 12.1137Z"
       stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    
  );
}

export default SvgComponent;
