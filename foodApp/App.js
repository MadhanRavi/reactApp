import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/logo-chinese-food-company-that-says-bizzard_863867-238.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Foodies"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/home">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = ({ resData }) => {
  const {
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    sla,
    cloudinaryImageId,
  } = resData;
  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
        alt="biriyani"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>₹{costForTwo / 100} for Two</h4>
      <h4>{avgRatingString}</h4>
      <h4>{sla.deliveryTime} Mins</h4>
    </div>
  );
};

const resList = [
  {
    id: "809950",
    name: "Sharief Bhai Biryani",
    city: "119",
    slugs: {
      restaurant: "sharief-bhai-biryani-central-erode-central-erode",
      city: "erode",
    },
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2024/11/18/490055ad-8d66-47d0-8953-e5071b79e76c_02aad165-08f1-4fee-9522-95e8a0cb7626.jpg",
    address:
      "# No-79/1, Perundurai Road, Kumalan Kuttai, Erode Corporation Ward-32, Tamil Nadu - 638011",
    locality: "Kumalan Kuttai",
    areaName: "Central Erode",
    costForTwo: "40000",
    costForTwoMessage: "₹400 FOR TWO",
    cuisines: [
      "Biryani",
      "shawarma",
      "Kebabs",
      "Mughlai",
      "Arabian",
      "rolls",
      "Street Food",
      "Tea",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.2,
    feeDetails: {},
    parentId: "469102",
    avgRatingString: "4.2",
    totalRatingsString: "1.9K+",
    sla: {
      deliveryTime: 21,
      minDeliveryTime: 20,
      maxDeliveryTime: 25,
      lastMileTravel: 0.9,
      serviceability: "SERVICEABLE",
      rainMode: "RAIN_MODE_NONE",
      slaString: "20-25 MINS",
      lastMileTravelString: "0.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      opened: true,
      restaurantClosedMeta: {},
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Biryani.png",
          description: "Delivery!",
        },
      ],
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹199",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    ratingSlab: "RATING_SLAB_5",
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    cartOrderabilityNudgeBanner: {
      parameters: {},
      presentation: {},
    },
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    featuredSectionInfo: {
      sectionTitle: "More",
    },
    showEoOffer: true,
  },
  {
    id: "385097",
    name: "Rowthar Biriyani And Fast Food",
    city: "119",
    slugs: {
      restaurant: "rowthar-biriyani-and-fast-food-central-erode-central-erode",
      city: "erode",
    },
    cloudinaryImageId: "a7cx0syqjzkp7ozrneyl",
    address:
      "143,Cauvery Road, Near Gandhi Silai, Karungalpalayam,Erode-638003",
    locality: "Cauvery Road",
    areaName: "Karungalpalayam",
    costForTwo: "30000",
    costForTwoMessage: "₹300 FOR TWO",
    cuisines: ["Chinese", "South Indian"],
    avgRating: 4.2,
    feeDetails: {},
    parentId: "253899",
    avgRatingString: "4.2",
    totalRatingsString: "5.6K+",
    promoted: true,
    adTrackingId:
      "cid=34479738~p=0~adgrpid=34479738#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=385097~plpr=SEARCH#RESTAURANT~st=biryani~eid=828b6c8b-acb5-4591-8c87-9038bf0ed657~srvts=1761902555892",
    sla: {
      deliveryTime: 32,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      rainMode: "RAIN_MODE_NONE",
      slaString: "30-40 MINS",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      opened: true,
      restaurantClosedMeta: {},
    },
    aggregatedDiscountInfo: {
      visible: true,
    },
    badges: {},
    aggregatedDiscountInfoV2: {
      visible: true,
    },
    ratingSlab: "RATING_SLAB_5",
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    cartOrderabilityNudgeBanner: {
      parameters: {},
      presentation: {},
    },
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    featuredSectionInfo: {
      sectionTitle: "More",
    },
    campaignId: "34479738",
    showEoOffer: true,
  },
  {
    id: "104239",
    name: "Meat and Eat",
    city: "119",
    slugs: {
      restaurant: "meat-and-eat-pannai-nager-test-erode",
      city: "erode",
    },
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2024/5/13/42695e9a-a4be-4f07-bc08-9fd8cfbc2a54_1b851378-03ac-47a1-9f5a-44e919965b26.jpg",
    address: "23/3F Panni nagar, Veerappampalayam Pirivu, eroade-638011",
    locality: "Pannai Nager",
    areaName: "Central Erode",
    costForTwo: "15000",
    costForTwoMessage: "₹150 FOR TWO",
    cuisines: ["Chinese", "Burgers", "Ice Cream"],
    avgRating: 4.3,
    feeDetails: {},
    parentId: "505635",
    avgRatingString: "4.3",
    totalRatingsString: "6.1K+",
    promoted: true,
    adTrackingId:
      "cid=34289288~p=1~adgrpid=34289288#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=104239~plpr=SEARCH#RESTAURANT~st=biryani~eid=2acd8b7d-2bcf-46ca-8e85-1da4740df5f2~srvts=1761902555892",
    sla: {
      deliveryTime: 19,
      minDeliveryTime: 15,
      maxDeliveryTime: 20,
      lastMileTravel: 0.7,
      serviceability: "SERVICEABLE",
      rainMode: "RAIN_MODE_NONE",
      slaString: "15-20 MINS",
      lastMileTravelString: "0.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      opened: true,
      restaurantClosedMeta: {},
    },
    badges: {},
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    ratingSlab: "RATING_SLAB_5",
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    cartOrderabilityNudgeBanner: {
      parameters: {},
      presentation: {},
    },
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    featuredSectionInfo: {
      sectionTitle: "More",
    },
    campaignId: "34289288",
    showEoOffer: true,
  },
  {
    id: "360038",
    name: "Dindigul Thalappakatti - Since 1957\n",
    city: "119",
    slugs: {
      restaurant: "dindigul-thalappakatti-central-erode-central-erode",
      city: "erode",
    },
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2024/6/13/c67f5cc5-8daf-45fd-bf2d-350993269790_50d8e9e9-909f-4311-afb8-254e41b62c8d.jpg",
    address:
      "Door No:247, Ground Floor, Brough Road, Erode, Tamil Nadu    683001",
    locality: "Chidambaram Colony",
    areaName: "Erode Fort",
    costForTwo: "50000",
    costForTwoMessage: "₹500 FOR TWO",
    cuisines: ["Biryani", "Barbecue", "South Indian", "Chinese"],
    avgRating: 4.3,
    feeDetails: {},
    parentId: "641506",
    avgRatingString: "4.3",
    totalRatingsString: "6.1K+",
    sla: {
      deliveryTime: 23,
      minDeliveryTime: 20,
      maxDeliveryTime: 25,
      lastMileTravel: 2.9,
      serviceability: "SERVICEABLE",
      rainMode: "RAIN_MODE_NONE",
      slaString: "20-25 MINS",
      lastMileTravelString: "2.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      opened: true,
      restaurantClosedMeta: {},
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Biryani.png",
          description: "Delivery!",
        },
      ],
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹199",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    ratingSlab: "RATING_SLAB_5",
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    cartOrderabilityNudgeBanner: {
      parameters: {},
      presentation: {},
    },
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    featuredSectionInfo: {
      sectionTitle: "More",
    },
    showEoOffer: true,
  },
  {
    id: "201624",
    name: "A2B - Adyar Ananda Bhavan",
    city: "119",
    slugs: {
      restaurant:
        "adyar-ananda-bhavan-sweets-india-private-central-erode-central-erode",
      city: "erode",
    },
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2024/4/1/85390410-fa23-4e50-a202-27a73a362153_aab8c831-4e11-4838-931f-d22aba1e057d.jpg_compressed",
    address: "No.154, Parimalam Complex, Mettur Rd, Erode, Tamil Nadu 638011",
    locality: "Adayar Ananda Bhavan",
    areaName: "Erode Fort",
    costForTwo: "30000",
    costForTwoMessage: "₹300 FOR TWO",
    cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
    avgRating: 4.6,
    feeDetails: {},
    parentId: "22",
    avgRatingString: "4.6",
    totalRatingsString: "28K+",
    promoted: true,
    adTrackingId:
      "cid=34460810~p=2~adgrpid=34460810#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=201624~plpr=SEARCH#RESTAURANT~st=biryani~eid=34dc02d9-f6f5-4937-a3bc-9a6d6d7eda30~srvts=1761902555892",
    sla: {
      deliveryTime: 23,
      minDeliveryTime: 20,
      maxDeliveryTime: 25,
      lastMileTravel: 2.8,
      serviceability: "SERVICEABLE",
      rainMode: "RAIN_MODE_NONE",
      slaString: "20-25 MINS",
      lastMileTravelString: "2.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      opened: true,
      restaurantClosedMeta: {},
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-South%20Indian.png",
          description: "Delivery!",
        },
      ],
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹599",
      discountTag: "FLAT DEAL",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    ratingSlab: "RATING_SLAB_5",
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    cartOrderabilityNudgeBanner: {
      parameters: {},
      presentation: {},
    },
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    featuredSectionInfo: {
      sectionTitle: "More",
    },
    campaignId: "34460810",
    showEoOffer: true,
  },
  {
    id: "106259",
    name: "AM Briyani",
    city: "119",
    slugs: {
      restaurant: "am-briyani-perundurai-rd-test-erode",
      city: "erode",
    },
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/8/6/1679b0e9-d77e-4562-bbe3-d2a618179cf2_23c15ba2-dabb-44a7-9293-204b61b28035.jpg_compressed",
    address: "89, Perundurai Road, opp to collector office, erode-638011",
    locality: "Perundurai Road",
    areaName: "Palayapalayam",
    costForTwo: "15000",
    costForTwoMessage: "₹150 FOR TWO",
    cuisines: ["Biryani", "South Indian"],
    avgRating: 4.3,
    feeDetails: {},
    parentId: "6737",
    avgRatingString: "4.3",
    totalRatingsString: "13K+",
    sla: {
      deliveryTime: 12,
      minDeliveryTime: 10,
      maxDeliveryTime: 15,
      lastMileTravel: 1.2,
      serviceability: "SERVICEABLE",
      rainMode: "RAIN_MODE_NONE",
      slaString: "10-15 MINS",
      lastMileTravelString: "1.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      opened: true,
      restaurantClosedMeta: {},
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Chinese.png",
          description: "Delivery!",
        },
      ],
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹34",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    ratingSlab: "RATING_SLAB_5",
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    cartOrderabilityNudgeBanner: {
      parameters: {},
      presentation: {},
    },
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    featuredSectionInfo: {
      sectionTitle: "More",
    },
    showEoOffer: true,
  },
  {
    id: "404963",
    name: "Erode RR Briyani",
    city: "119",
    slugs: {
      restaurant: "erode-rr-briyani-central-erode-central-erode",
      city: "erode",
    },
    cloudinaryImageId: "ncydbvwrx8glcsr3owxn",
    address: "8, SH 83A, Periyar Nagar, Erode, Tamil Nadu 638001",
    locality: "Eswaran Street",
    areaName: "GH Roundana",
    costForTwo: "30000",
    costForTwoMessage: "₹300 FOR TWO",
    cuisines: ["Chinese"],
    avgRating: 4,
    feeDetails: {},
    parentId: "245282",
    avgRatingString: "4.0",
    totalRatingsString: "2.1K+",
    promoted: true,
    adTrackingId:
      "cid=34483716~p=3~adgrpid=34483716#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=404963~plpr=SEARCH#RESTAURANT~st=biryani~eid=4f3f8644-a203-45f3-907e-43d0adbc504e~srvts=1761902555892",
    sla: {
      deliveryTime: 23,
      minDeliveryTime: 20,
      maxDeliveryTime: 25,
      lastMileTravel: 4.4,
      serviceability: "SERVICEABLE",
      rainMode: "RAIN_MODE_NONE",
      slaString: "20-25 MINS",
      lastMileTravelString: "4.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      opened: true,
      restaurantClosedMeta: {},
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          description: "OnlyOnSwiggy",
        },
      ],
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
      logoCtx: {
        text: "BENEFITS",
      },
      footerText: "6 DEALS LEFT",
      secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
    },
    ratingSlab: "RATING_SLAB_4",
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    cartOrderabilityNudgeBanner: {
      parameters: {},
      presentation: {},
    },
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    featuredSectionInfo: {
      sectionTitle: "More",
    },
    campaignId: "34483716",
    showEoOffer: true,
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res) => (
          <ResCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
