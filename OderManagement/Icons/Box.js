import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg 
        width="60" height="59" 
        viewBox="0 0 60 59" fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <Path d="M6.01562 46.1914H6.76562C6.72656 46.5508 6.6237 46.8724 6.45703 47.1562C6.29036 47.4401 6.05469 47.6654 5.75 47.832C5.44531 47.9961 5.0651 48.0781 4.60938 48.0781C4.27604 48.0781 3.97266 48.0156 3.69922 47.8906C3.42839 47.7656 3.19531 47.5885 3 47.3594C2.80469 47.1276 2.65365 46.8503 2.54688 46.5273C2.44271 46.2018 2.39062 45.8398 2.39062 45.4414V44.875C2.39062 44.4766 2.44271 44.1159 2.54688 43.793C2.65365 43.4674 2.80599 43.1888 3.00391 42.957C3.20443 42.7253 3.44531 42.5469 3.72656 42.4219C4.00781 42.2969 4.32422 42.2344 4.67578 42.2344C5.10547 42.2344 5.46875 42.3151 5.76562 42.4766C6.0625 42.638 6.29297 42.862 6.45703 43.1484C6.6237 43.4323 6.72656 43.7617 6.76562 44.1367H6.01562C5.97917 43.8711 5.91146 43.6432 5.8125 43.4531C5.71354 43.2604 5.57292 43.112 5.39062 43.0078C5.20833 42.9036 4.97005 42.8516 4.67578 42.8516C4.42318 42.8516 4.20052 42.8997 4.00781 42.9961C3.81771 43.0924 3.65755 43.2292 3.52734 43.4062C3.39974 43.5833 3.30339 43.7956 3.23828 44.043C3.17318 44.2904 3.14062 44.5651 3.14062 44.8672V45.4414C3.14062 45.7201 3.16927 45.9818 3.22656 46.2266C3.28646 46.4714 3.3763 46.6862 3.49609 46.8711C3.61589 47.056 3.76823 47.2018 3.95312 47.3086C4.13802 47.4128 4.35677 47.4648 4.60938 47.4648C4.92969 47.4648 5.1849 47.4141 5.375 47.3125C5.5651 47.2109 5.70833 47.0651 5.80469 46.875C5.90365 46.6849 5.97396 46.457 6.01562 46.1914ZM8.40625 42V48H7.68359V42H8.40625ZM8.23438 45.7266L7.93359 45.7148C7.9362 45.4258 7.97917 45.1589 8.0625 44.9141C8.14583 44.6667 8.26302 44.4518 8.41406 44.2695C8.5651 44.0872 8.74479 43.9466 8.95312 43.8477C9.16406 43.7461 9.39714 43.6953 9.65234 43.6953C9.86068 43.6953 10.0482 43.724 10.2148 43.7812C10.3815 43.8359 10.5234 43.9245 10.6406 44.0469C10.7604 44.1693 10.8516 44.3281 10.9141 44.5234C10.9766 44.7161 11.0078 44.9518 11.0078 45.2305V48H10.2812V45.2227C10.2812 45.0013 10.2487 44.8242 10.1836 44.6914C10.1185 44.556 10.0234 44.4583 9.89844 44.3984C9.77344 44.3359 9.61979 44.3047 9.4375 44.3047C9.25781 44.3047 9.09375 44.3424 8.94531 44.418C8.79948 44.4935 8.67318 44.5977 8.56641 44.7305C8.46224 44.8633 8.38021 45.0156 8.32031 45.1875C8.26302 45.3568 8.23438 45.5365 8.23438 45.7266ZM15.6836 43.3086H16.2656C16.2656 43.5951 16.2266 43.8424 16.1484 44.0508C16.0703 44.2565 15.9401 44.4154 15.7578 44.5273C15.5755 44.6393 15.3281 44.6953 15.0156 44.6953V44.2422C15.2109 44.2422 15.3555 44.2031 15.4492 44.125C15.5456 44.0469 15.6081 43.9375 15.6367 43.7969C15.668 43.6562 15.6836 43.4935 15.6836 43.3086ZM11.8984 45.9336V45.8438C11.8984 45.5391 11.9427 45.2565 12.0312 44.9961C12.1198 44.7331 12.2474 44.5052 12.4141 44.3125C12.5807 44.1172 12.7826 43.9661 13.0195 43.8594C13.2565 43.75 13.5221 43.6953 13.8164 43.6953C14.1133 43.6953 14.3802 43.75 14.6172 43.8594C14.8568 43.9661 15.0599 44.1172 15.2266 44.3125C15.3932 44.5052 15.5208 44.7331 15.6094 44.9961C15.6979 45.2565 15.7422 45.5391 15.7422 45.8438V45.9336C15.7422 46.2383 15.6979 46.5208 15.6094 46.7812C15.5208 47.0417 15.3932 47.2695 15.2266 47.4648C15.0599 47.6576 14.8581 47.8086 14.6211 47.918C14.3867 48.0247 14.1211 48.0781 13.8242 48.0781C13.5273 48.0781 13.2604 48.0247 13.0234 47.918C12.7865 47.8086 12.5833 47.6576 12.4141 47.4648C12.2474 47.2695 12.1198 47.0417 12.0312 46.7812C11.9427 46.5208 11.8984 46.2383 11.8984 45.9336ZM12.6211 45.8438V45.9336C12.6211 46.1445 12.6458 46.3438 12.6953 46.5312C12.7448 46.7161 12.819 46.8802 12.918 47.0234C13.0195 47.1667 13.1458 47.2799 13.2969 47.3633C13.4479 47.444 13.6237 47.4844 13.8242 47.4844C14.0221 47.4844 14.1953 47.444 14.3438 47.3633C14.4948 47.2799 14.6198 47.1667 14.7188 47.0234C14.8177 46.8802 14.8919 46.7161 14.9414 46.5312C14.9935 46.3438 15.0195 46.1445 15.0195 45.9336V45.8438C15.0195 45.6354 14.9935 45.4388 14.9414 45.2539C14.8919 45.0664 14.8164 44.901 14.7148 44.7578C14.6159 44.612 14.4909 44.4974 14.3398 44.4141C14.1914 44.3307 14.0169 44.2891 13.8164 44.2891C13.6185 44.2891 13.444 44.3307 13.293 44.4141C13.1445 44.4974 13.0195 44.612 12.918 44.7578C12.819 44.901 12.7448 45.0664 12.6953 45.2539C12.6458 45.4388 12.6211 45.6354 12.6211 45.8438ZM13.4688 42L14.2227 43.1484H13.6016L12.5938 42H13.4688ZM19.9375 47.3477L21.0938 43.7734H21.832L20.3125 48H19.8281L19.9375 47.3477ZM18.9727 43.7734L20.1641 47.3672L20.2461 48H19.7617L18.2305 43.7734H18.9727ZM24.957 47.2773V45.1016C24.957 44.9349 24.9232 44.7904 24.8555 44.668C24.7904 44.543 24.6914 44.4466 24.5586 44.3789C24.4258 44.3112 24.2617 44.2773 24.0664 44.2773C23.8841 44.2773 23.724 44.3086 23.5859 44.3711C23.4505 44.4336 23.3438 44.5156 23.2656 44.6172C23.1901 44.7188 23.1523 44.8281 23.1523 44.9453H22.4297C22.4297 44.7943 22.4688 44.6445 22.5469 44.4961C22.625 44.3477 22.737 44.2135 22.8828 44.0938C23.0312 43.9714 23.2083 43.875 23.4141 43.8047C23.6224 43.7318 23.8542 43.6953 24.1094 43.6953C24.4167 43.6953 24.6875 43.7474 24.9219 43.8516C25.1589 43.9557 25.3438 44.1133 25.4766 44.3242C25.612 44.5326 25.6797 44.7943 25.6797 45.1094V47.0781C25.6797 47.2188 25.6914 47.3685 25.7148 47.5273C25.7409 47.6862 25.7786 47.8229 25.8281 47.9375V48H25.0742C25.0378 47.9167 25.0091 47.806 24.9883 47.668C24.9674 47.5273 24.957 47.3971 24.957 47.2773ZM25.082 45.4375L25.0898 45.9453H24.3594C24.1536 45.9453 23.9701 45.9622 23.8086 45.9961C23.6471 46.0273 23.5117 46.0755 23.4023 46.1406C23.293 46.2057 23.2096 46.2878 23.1523 46.3867C23.0951 46.4831 23.0664 46.5964 23.0664 46.7266C23.0664 46.8594 23.0964 46.9805 23.1562 47.0898C23.2161 47.1992 23.306 47.2865 23.4258 47.3516C23.5482 47.4141 23.6979 47.4453 23.875 47.4453C24.0964 47.4453 24.2917 47.3984 24.4609 47.3047C24.6302 47.2109 24.7643 47.0964 24.8633 46.9609C24.9648 46.8255 25.0195 46.694 25.0273 46.5664L25.3359 46.9141C25.3177 47.0234 25.2682 47.1445 25.1875 47.2773C25.1068 47.4102 24.9987 47.5378 24.8633 47.6602C24.7305 47.7799 24.5716 47.8802 24.3867 47.9609C24.2044 48.0391 23.9987 48.0781 23.7695 48.0781C23.4831 48.0781 23.2318 48.0221 23.0156 47.9102C22.8021 47.7982 22.6354 47.6484 22.5156 47.4609C22.3984 47.2708 22.3398 47.0586 22.3398 46.8242C22.3398 46.5977 22.3841 46.3984 22.4727 46.2266C22.5612 46.0521 22.6888 45.9076 22.8555 45.793C23.0221 45.6758 23.2227 45.5872 23.457 45.5273C23.6914 45.4674 23.9531 45.4375 24.2422 45.4375H25.082ZM24.4062 42L25.375 43.0664V43.1055H24.7734L24.1875 42.4453L23.6055 43.1055H23.0117V43.0625L23.9688 42H24.4062ZM23.4258 48.9609C23.4258 48.8438 23.4609 48.7448 23.5312 48.6641C23.6042 48.5833 23.7109 48.543 23.8516 48.543C23.9896 48.543 24.0951 48.5833 24.168 48.6641C24.2435 48.7448 24.2812 48.8438 24.2812 48.9609C24.2812 49.0729 24.2435 49.168 24.168 49.2461C24.0951 49.3268 23.9896 49.3672 23.8516 49.3672C23.7109 49.3672 23.6042 49.3268 23.5312 49.2461C23.4609 49.168 23.4258 49.0729 23.4258 48.9609ZM27.5391 44.6758V48H26.8164V43.7734H27.5L27.5391 44.6758ZM27.3672 45.7266L27.0664 45.7148C27.069 45.4258 27.112 45.1589 27.1953 44.9141C27.2786 44.6667 27.3958 44.4518 27.5469 44.2695C27.6979 44.0872 27.8776 43.9466 28.0859 43.8477C28.2969 43.7461 28.5299 43.6953 28.7852 43.6953C28.9935 43.6953 29.181 43.724 29.3477 43.7812C29.5143 43.8359 29.6562 43.9245 29.7734 44.0469C29.8932 44.1693 29.9844 44.3281 30.0469 44.5234C30.1094 44.7161 30.1406 44.9518 30.1406 45.2305V48H29.4141V45.2227C29.4141 45.0013 29.3815 44.8242 29.3164 44.6914C29.2513 44.556 29.1562 44.4583 29.0312 44.3984C28.9062 44.3359 28.7526 44.3047 28.5703 44.3047C28.3906 44.3047 28.2266 44.3424 28.0781 44.418C27.9323 44.4935 27.806 44.5977 27.6992 44.7305C27.5951 44.8633 27.513 45.0156 27.4531 45.1875C27.3958 45.3568 27.3672 45.5365 27.3672 45.7266ZM34.9141 47.4844C35.0859 47.4844 35.2448 47.4492 35.3906 47.3789C35.5365 47.3086 35.6562 47.2122 35.75 47.0898C35.8438 46.9648 35.8971 46.8229 35.9102 46.6641H36.5977C36.5846 46.9141 36.5 47.1471 36.3438 47.3633C36.1901 47.5768 35.9883 47.75 35.7383 47.8828C35.4883 48.013 35.2135 48.0781 34.9141 48.0781C34.5964 48.0781 34.319 48.0221 34.082 47.9102C33.8477 47.7982 33.6523 47.6445 33.4961 47.4492C33.3424 47.2539 33.2266 47.0299 33.1484 46.7773C33.0729 46.5221 33.0352 46.2526 33.0352 45.9688V45.8047C33.0352 45.5208 33.0729 45.2526 33.1484 45C33.2266 44.7448 33.3424 44.5195 33.4961 44.3242C33.6523 44.1289 33.8477 43.9753 34.082 43.8633C34.319 43.7513 34.5964 43.6953 34.9141 43.6953C35.2448 43.6953 35.5339 43.763 35.7812 43.8984C36.0286 44.0312 36.2227 44.2135 36.3633 44.4453C36.5065 44.6745 36.5846 44.9349 36.5977 45.2266H35.9102C35.8971 45.0521 35.8477 44.8945 35.7617 44.7539C35.6784 44.6133 35.5638 44.5013 35.418 44.418C35.2747 44.332 35.1068 44.2891 34.9141 44.2891C34.6927 44.2891 34.5065 44.3333 34.3555 44.4219C34.207 44.5078 34.0885 44.625 34 44.7734C33.9141 44.9193 33.8516 45.082 33.8125 45.2617C33.776 45.4388 33.7578 45.6198 33.7578 45.8047V45.9688C33.7578 46.1536 33.776 46.3359 33.8125 46.5156C33.849 46.6953 33.9102 46.8581 33.9961 47.0039C34.0846 47.1497 34.2031 47.2669 34.3516 47.3555C34.5026 47.4414 34.6901 47.4844 34.9141 47.4844ZM38.1328 42V48H37.4102V42H38.1328ZM37.9609 45.7266L37.6602 45.7148C37.6628 45.4258 37.7057 45.1589 37.7891 44.9141C37.8724 44.6667 37.9896 44.4518 38.1406 44.2695C38.2917 44.0872 38.4714 43.9466 38.6797 43.8477C38.8906 43.7461 39.1237 43.6953 39.3789 43.6953C39.5872 43.6953 39.7747 43.724 39.9414 43.7812C40.1081 43.8359 40.25 43.9245 40.3672 44.0469C40.487 44.1693 40.5781 44.3281 40.6406 44.5234C40.7031 44.7161 40.7344 44.9518 40.7344 45.2305V48H40.0078V45.2227C40.0078 45.0013 39.9753 44.8242 39.9102 44.6914C39.8451 44.556 39.75 44.4583 39.625 44.3984C39.5 44.3359 39.3464 44.3047 39.1641 44.3047C38.9844 44.3047 38.8203 44.3424 38.6719 44.418C38.526 44.4935 38.3997 44.5977 38.293 44.7305C38.1888 44.8633 38.1068 45.0156 38.0469 45.1875C37.9896 45.3568 37.9609 45.5365 37.9609 45.7266ZM44.4023 47.0234V43.7734H45.1289V48H44.4375L44.4023 47.0234ZM44.5391 46.1328L44.8398 46.125C44.8398 46.4062 44.8099 46.6667 44.75 46.9062C44.6927 47.1432 44.599 47.349 44.4688 47.5234C44.3385 47.6979 44.168 47.8346 43.957 47.9336C43.7461 48.0299 43.4896 48.0781 43.1875 48.0781C42.9818 48.0781 42.793 48.0482 42.6211 47.9883C42.4518 47.9284 42.306 47.8359 42.1836 47.7109C42.0612 47.5859 41.9661 47.4232 41.8984 47.2227C41.8333 47.0221 41.8008 46.7812 41.8008 46.5V43.7734H42.5234V46.5078C42.5234 46.6979 42.5443 46.8555 42.5859 46.9805C42.6302 47.1029 42.6888 47.2005 42.7617 47.2734C42.8372 47.3438 42.9206 47.3932 43.0117 47.4219C43.1055 47.4505 43.2018 47.4648 43.3008 47.4648C43.6081 47.4648 43.8516 47.4062 44.0312 47.2891C44.2109 47.1693 44.3398 47.0091 44.418 46.8086C44.4987 46.6055 44.5391 46.3802 44.5391 46.1328ZM47.418 47.5625L48.5938 43.7734H49.3672L47.6719 48.6523C47.6328 48.7565 47.5807 48.8685 47.5156 48.9883C47.4531 49.1107 47.3724 49.2266 47.2734 49.3359C47.1745 49.4453 47.0547 49.5339 46.9141 49.6016C46.776 49.6719 46.6107 49.707 46.418 49.707C46.3607 49.707 46.2878 49.6992 46.1992 49.6836C46.1107 49.668 46.0482 49.6549 46.0117 49.6445L46.0078 49.0586C46.0286 49.0612 46.0612 49.0638 46.1055 49.0664C46.1523 49.0716 46.1849 49.0742 46.2031 49.0742C46.3672 49.0742 46.5065 49.0521 46.6211 49.0078C46.7357 48.9661 46.832 48.8945 46.9102 48.793C46.9909 48.694 47.0599 48.5573 47.1172 48.3828L47.418 47.5625ZM46.5547 43.7734L47.6523 47.0547L47.8398 47.8164L47.3203 48.082L45.7656 43.7734H46.5547ZM51.7188 48.0781C51.4245 48.0781 51.1576 48.0286 50.918 47.9297C50.681 47.8281 50.4766 47.6862 50.3047 47.5039C50.1354 47.3216 50.0052 47.1055 49.9141 46.8555C49.8229 46.6055 49.7773 46.332 49.7773 46.0352V45.8711C49.7773 45.5273 49.8281 45.2214 49.9297 44.9531C50.0312 44.6823 50.1693 44.4531 50.3438 44.2656C50.5182 44.0781 50.7161 43.9362 50.9375 43.8398C51.1589 43.7435 51.388 43.6953 51.625 43.6953C51.9271 43.6953 52.1875 43.7474 52.4062 43.8516C52.6276 43.9557 52.8086 44.1016 52.9492 44.2891C53.0898 44.474 53.194 44.6927 53.2617 44.9453C53.3294 45.1953 53.3633 45.4688 53.3633 45.7656V46.0898H50.207V45.5H52.6406V45.4453C52.6302 45.2578 52.5911 45.0755 52.5234 44.8984C52.4583 44.7214 52.3542 44.5755 52.2109 44.4609C52.0677 44.3464 51.8724 44.2891 51.625 44.2891C51.4609 44.2891 51.3099 44.3242 51.1719 44.3945C51.0339 44.4622 50.9154 44.5638 50.8164 44.6992C50.7174 44.8346 50.6406 45 50.5859 45.1953C50.5312 45.3906 50.5039 45.6159 50.5039 45.8711V46.0352C50.5039 46.2357 50.5312 46.4245 50.5859 46.6016C50.6432 46.776 50.7253 46.9297 50.832 47.0625C50.9414 47.1953 51.0729 47.2995 51.2266 47.375C51.3828 47.4505 51.5599 47.4883 51.7578 47.4883C52.013 47.4883 52.2292 47.4362 52.4062 47.332C52.5833 47.2279 52.7383 47.0885 52.8711 46.9141L53.3086 47.2617C53.2174 47.3997 53.1016 47.5312 52.9609 47.6562C52.8203 47.7812 52.6471 47.8828 52.4414 47.9609C52.2383 48.0391 51.9974 48.0781 51.7188 48.0781ZM51.9805 42.1875L53.0508 43.2148H52.3828L51.6133 42.4883L50.8477 43.2148H50.1836L51.2461 42.1875H51.9805ZM53.1719 42.6758H52.7227L52.7188 42.1602C52.8333 42.1523 52.9258 42.1406 52.9961 42.125C53.0664 42.1094 53.1185 42.0859 53.1523 42.0547C53.1862 42.0208 53.2031 41.9753 53.2031 41.918C53.2031 41.8529 53.1784 41.8021 53.1289 41.7656C53.0794 41.7266 53.013 41.6992 52.9297 41.6836C52.8464 41.6654 52.7539 41.6562 52.6523 41.6562L52.6758 41.293C52.8424 41.293 52.9883 41.3086 53.1133 41.3398C53.2409 41.3685 53.3477 41.4115 53.4336 41.4688C53.5221 41.5234 53.5885 41.5898 53.6328 41.668C53.6771 41.7435 53.6992 41.8294 53.6992 41.9258C53.6992 42.0951 53.6445 42.2188 53.5352 42.2969C53.4284 42.3724 53.3086 42.4193 53.1758 42.4375L53.1719 42.6758ZM54.9297 44.6758V48H54.207V43.7734H54.8906L54.9297 44.6758ZM54.7578 45.7266L54.457 45.7148C54.4596 45.4258 54.5026 45.1589 54.5859 44.9141C54.6693 44.6667 54.7865 44.4518 54.9375 44.2695C55.0885 44.0872 55.2682 43.9466 55.4766 43.8477C55.6875 43.7461 55.9206 43.6953 56.1758 43.6953C56.3841 43.6953 56.5716 43.724 56.7383 43.7812C56.9049 43.8359 57.0469 43.9245 57.1641 44.0469C57.2839 44.1693 57.375 44.3281 57.4375 44.5234C57.5 44.7161 57.5312 44.9518 57.5312 45.2305V48H56.8047V45.2227C56.8047 45.0013 56.7721 44.8242 56.707 44.6914C56.6419 44.556 56.5469 44.4583 56.4219 44.3984C56.2969 44.3359 56.1432 44.3047 55.9609 44.3047C55.7812 44.3047 55.6172 44.3424 55.4688 44.418C55.3229 44.4935 55.1966 44.5977 55.0898 44.7305C54.9857 44.8633 54.9036 45.0156 54.8438 45.1875C54.7865 45.3568 54.7578 45.5365 54.7578 45.7266Z" fill="#04BF45"/>
        <Path d="M36.9725 5.54L34.4725 4.2275C32.2775 3.07625 31.18 2.5 30 2.5C28.82 2.5 27.7225 3.075 25.5275 4.2275L25.1262 4.43875L36.28 10.8125L41.3 8.3C40.4925 7.385 39.19 6.70125 36.9725 5.5375M42.185 9.955L37.1875 12.455V16.25C37.1875 16.4986 37.0887 16.7371 36.9129 16.9129C36.7371 17.0887 36.4986 17.1875 36.25 17.1875C36.0014 17.1875 35.7629 17.0887 35.5871 16.9129C35.4113 16.7371 35.3125 16.4986 35.3125 16.25V13.3925L30.9375 15.58V27.38C31.835 27.1562 32.8562 26.6213 34.4725 25.7725L36.9725 24.46C39.6612 23.0488 41.0063 22.3438 41.7537 21.075C42.5 19.8075 42.5 18.2288 42.5 15.075V14.9288C42.5 12.5625 42.5 11.0825 42.185 9.955ZM29.0625 27.38V15.58L17.815 9.955C17.5 11.0825 17.5 12.5625 17.5 14.9263V15.0725C17.5 18.2287 17.5 19.8075 18.2462 21.075C18.9937 22.3438 20.3387 23.05 23.0275 24.4613L25.5275 25.7725C27.1438 26.6213 28.165 27.1562 29.0625 27.38ZM18.7 8.30125L30 13.9513L34.2638 11.82L23.1562 5.4725L23.0275 5.54C20.8112 6.7025 19.5075 7.38625 18.7 8.3025" 
        fill="#04BF45"/>
    </Svg>

  );
}

export default SvgComponent;



