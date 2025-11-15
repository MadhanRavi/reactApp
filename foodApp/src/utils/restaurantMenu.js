const resMenu = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "PlanetB Family Restaurant",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [{ id: "Order Online", title: "Order Online" }],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "104715",
              name: "PlanetB Family Restaurant",
              city: "Erode",
              slugs: {
                restaurant:
                  "plan-b-the-family-restaurant-perundurai-rd-test-erode",
                city: "erode",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "msorzpesqh7fob8kqc8t",
              locality: "Perundurai Rd",
              areaName: "Kumalankuttai",
              costForTwo: "50000",
              costForTwoMessage: "₹500 for two",
              cuisines: ["North Indian", "Tandoor"],
              avgRating: 4.3,
              feeDetails: { restaurantId: "104715", fees: [{}] },
              parentId: "458757",
              avgRatingString: "4.3",
              totalRatingsString: "14K+ ratings",
              sla: {
                restaurantId: "104715",
                lastMileTravel: 356.9,
                serviceability: "NON_SERVICEABLE",
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                lastMileTravelString: "356.9 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-12 00:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "65% off",
                shortDescriptionList: [
                  {
                    meta: "65% off | Use FEASTMODE65",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "10% off | Use PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "65% off | Use FEASTMODE65",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "10% off | Use code PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString:
                "plan-b-the-family-restaurant-perundurai-rd-test-erode",
              isOpen: true,
              labels: [
                { title: "Timings", message: "null" },
                {
                  title: "Address",
                  message: "133, Perundurai Rd, Kumanan Kuttai,Erode-11",
                },
                { title: "Cuisines", message: "North Indian,Tandoor" },
              ],
              totalRatings: 14000,
              aggregatedDiscountInfoV2: {
                header: "65% off",
                shortDescriptionList: [
                  {
                    meta: "65% off | Use FEASTMODE65",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "10% off | Use PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "65% off | Use FEASTMODE65",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "10% off | Use code PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  minValue: 132,
                  maxValue: 189,
                  priority: 1,
                  couponCode: "FEASTMODE65",
                  discountInfo: { discountType: "Percentage", value: 65 },
                  lockedMessage:
                    "Add items worth ₹<amount> to save upto ₹130 | Code FEASTMODE65",
                  unlockedMessage:
                    "FEASTMODE65 Coupon Unlocked! Use it to save upto ₹130",
                  logoCtx: {},
                  movComputationType: "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE",
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/104715",
              },
              ratingSlab: "RATING_SLAB_5",
              availabilityServiceabilityMessage:
                "Does not deliver to your location",
              orderabilityCommunication: {
                title: { text: "Wish you were" },
                subTitle: { text: "CLOSER!" },
                message: {
                  text: "This location is outside the outlet's delivery area",
                  textColour: "negative",
                },
                customIcon: {
                  bgGradientColorStart: "#F64C41",
                  bgGradientColorEnd: "#E53554",
                },
                commsStyling: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "11.3324966,77.70297720000008",
              backgroundImageOverlayInfo: {},
              featuredSectionInfo: {},
              dishStyle: {
                socialMarkerStyle: [
                  {
                    socialMarkerType: "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                    title: "Protein Rich",
                    textStyle: "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                    textColor: "highlight",
                  },
                  {
                    socialMarkerType: "SOCIAL_MARKER_TYPE_BESTSELLER",
                    title: "Bestseller",
                    textStyle: "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                    textColor: "color_swiggy_one",
                  },
                ],
              },
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 4,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 10, right: 10, bottom: 16 },
              },
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "65% OFF UPTO ₹130",
                      offerTag: "DEFAULT",
                      offerTagColor: "#E46D47",
                      offerIds: ["dd5f4c42-dee4-46ea-aff0-5ab5bcc708f2"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FEASTMODE65",
                      description: "ABOVE ₹189",
                      offerType: "offers",
                      restId: "104715",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE FEASTMODE65",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "FLAT 10% OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["6700362d-0336-4b6c-b416-e132035c87fc"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE PARTY",
                      description: "ABOVE ₹1300",
                      offerType: "offers",
                      restId: "104715",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE PARTY",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "FLAT ₹50 OFF",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/11/7/5b007709-83a7-4ff6-b4c8-a6a3e1ec7479_ICICIMenuLogo.png",
                      offerIds: ["afa50866-28fc-4529-b06e-b59650ee3033"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "NO CODE REQUIRED",
                      description: "ABOVE ₹599",
                      offerType: "offers",
                      restId: "104715",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/11/7/5b007709-83a7-4ff6-b4c8-a6a3e1ec7479_ICICIMenuLogo.png",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "NO CODE REQUIRED",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "60% OFF UPTO ₹120",
                      offerTagColor: "#E46D47",
                      offerIds: ["554a54b4-56a9-44c9-85ac-ca346f4561c6"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE TRYNEW",
                      description: "ABOVE ₹159",
                      offerType: "offers",
                      restId: "104715",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE TRYNEW",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                ],
                habitMilestoneInfo: { callout: {} },
                loyaltyDiscoverPresentationInfo: { logoCtx: {} },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {
                        attributes: { displayText: "Ratings 4.0+" },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: { attributes: { displayText: "VEG" } },
                      nonvegFilter: {
                        attributes: { displayText: "NONVEG" },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Starters",
                      categories: [
                        {
                          title: "Non-veg Starter",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963666",
                                  name: "Chicken Lollipop",
                                  category: "Starters",
                                  description:
                                    "Everyone's favorite home spiced chicken lollipop served straight from the tandoor.",
                                  imageId: "c16f3d113d00fc5aa420cb540a5ed861",
                                  inStock: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "479 ratings",
                                      ratingCountV2: "479",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "41860804",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245035",
                                  name: "Boneless Chicken 65",
                                  category: "Starters",
                                  imageId: "aa0d601272ee62925fa0abf8d75551e0",
                                  inStock: 1,
                                  price: 21900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "61 ratings",
                                      ratingCountV2: "61",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72843236",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "85290395",
                                  name: "Japan Chicken",
                                  category: "Starters",
                                  description:
                                    "Chicken with Indo-Japanese BBQ sauce.",
                                  inStock: 1,
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "49 ratings",
                                      ratingCountV2: "49",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72224522",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963721",
                                  name: "Chicken Pallipalayam Dry",
                                  category: "Starters",
                                  imageId: "a09187354a88eadde8d665a4105ed3f3",
                                  inStock: 1,
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "105 ratings",
                                      ratingCountV2: "105",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72457449",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245040",
                                  name: "Boneless Pepper Chicken",
                                  category: "Starters",
                                  imageId: "c288bd5337bea627249ca1c69e69c6af",
                                  inStock: 1,
                                  price: 31600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "18 ratings",
                                      ratingCountV2: "18",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72620796",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963691",
                                  name: "Pachamilagai Chicken",
                                  category: "Starters",
                                  imageId: "9c234bae132dfed98046c151abc84001",
                                  inStock: 1,
                                  price: 31600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "123 ratings",
                                      ratingCountV2: "123",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73458080",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245036",
                                  name: "Boneless Chicken Manchurian",
                                  category: "Starters",
                                  imageId: "3c667be79021ab9409b063c09b1efb90",
                                  inStock: 1,
                                  price: 31600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "13 ratings",
                                      ratingCountV2: "13",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72262668",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245037",
                                  name: "Chinease Chilli Chicken (b/l)",
                                  category: "Starters",
                                  imageId: "98aec29e265d5bae5954f1a6e11e5b6f",
                                  inStock: 1,
                                  price: 31600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73288687",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245041",
                                  name: "Planet B Special Chicken Dry (b/l)",
                                  category: "Starters",
                                  inStock: 1,
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "32 ratings",
                                      ratingCountV2: "32",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72178682",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245038",
                                  name: "Dragon Chicken (b/l)",
                                  category: "Starters",
                                  description:
                                    "Fiery red chicken tossed in Indo-Chinese sauces.",
                                  inStock: 1,
                                  price: 31600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "14 ratings",
                                      ratingCountV2: "14",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73201487",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280386",
                                  name: "Garlic Chicken",
                                  category: "Starters",
                                  description: "Chicken saut",
                                  inStock: 1,
                                  price: 31600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "8 ratings",
                                      ratingCountV2: "8",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "74429355",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245039",
                                  name: "Honey Chicken",
                                  category: "Starters",
                                  description:
                                    "Sweet and spicy chicken glazed with honey sauce.",
                                  inStock: 1,
                                  price: 31600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72125160",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280383",
                                  name: "Lemon Chicken",
                                  category: "Starters",
                                  inStock: 1,
                                  price: 31600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.2",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#FFF0CD", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_low",
                                      ratingTextColor: "rating_low",
                                      ratingCountTextColor: "rating_low",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73092026",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963706",
                                  name: "Mutton Pallipalayam",
                                  category: "Starters",
                                  imageId: "53572062e0bd3e79437d0b58ba24c444",
                                  price: 37600,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.3",
                                      ratingCount: "21 ratings",
                                      ratingCountV2: "21",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73458076",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963710",
                                  name: "Mutton Chukka",
                                  category: "Starters",
                                  imageId: "fa4e95402a99441c739459a430d7e861",
                                  price: 37600,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "80 ratings",
                                      ratingCountV2: "80",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "41860851",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "37153529",
                        },
                        {
                          title: "Veg Starter",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280359",
                                  name: "Paneer Manchurian",
                                  category: "Starters",
                                  description:
                                    "Fried paneer cubes in spicy manchurian sauce.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24100,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.0",
                                      ratingCount: "20 ratings",
                                      ratingCountV2: "20",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72178680",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "85290394",
                                  name: "Japan Paneer",
                                  category: "Starters",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "54 ratings",
                                      ratingCountV2: "54",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "76856456",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245034",
                                  name: "Veg Ball Manchurian",
                                  category: "Starters",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "8 ratings",
                                      ratingCountV2: "8",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72074769",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963846",
                                  name: "Mushroom Manchurian",
                                  category: "Starters",
                                  description:
                                    "Deep fried, crispy meaty mushroom tossed in a thick and spicy manchurian gravy.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "127 ratings",
                                      ratingCountV2: "127",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72620798",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245033",
                                  name: "Paneer Chinease Chilly",
                                  category: "Starters",
                                  description:
                                    "Paneer tossed with green chilli and Chinese sauces.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24100,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "11 ratings",
                                      ratingCountV2: "11",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72262673",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963861",
                                  name: "Paneer 65",
                                  category: "Starters",
                                  description:
                                    "Deliciously crispy thin and long dosa smothered with butter, served with sambar and chutney, a typical South Indian breakfast.",
                                  imageId: "dabb1e140522bea0f8fe4e994d231e31",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "88 ratings",
                                      ratingCountV2: "88",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "41860859",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245031",
                                  name: "Gobi Manchurian",
                                  category: "Starters",
                                  description:
                                    "Crispy cauliflower tossed in desi-Chinese manchurian sauce.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "19 ratings",
                                      ratingCountV2: "19",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72224521",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963844",
                                  name: "Mushroom Hot Pepper",
                                  category: "Starters",
                                  description:
                                    "Hot and peppery mushroom fry with desi touch.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "99 ratings",
                                      ratingCountV2: "99",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73531783",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280348",
                                  name: "Baby Corn Manchurian",
                                  category: "Starters",
                                  description:
                                    "Indo-Chinese style babycorn in tangy manchurian sauce.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "74542568",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963842",
                                  name: "Mushroom 65",
                                  category: "Starters",
                                  description:
                                    "Spicy fried mushrooms coated in 65-style masala.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19100,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "94 ratings",
                                      ratingCountV2: "94",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "41860847",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963835",
                                  name: "Gobi 65",
                                  category: "Starters",
                                  description:
                                    "Cauliflower deep-fried in spicy 65 style masala.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19100,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.7",
                                      ratingCount: "150 ratings",
                                      ratingCountV2: "150",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "41860832",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245032",
                                  name: "Mushroom Chinease Chilly",
                                  category: "Starters",
                                  description:
                                    "Mushrooms in Chinese sauces and green chillies.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "74868549",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245029",
                                  name: "Baby Corn Chinease Chilly",
                                  category: "Starters",
                                  description:
                                    "Tossed babycorn with Chinese sauces and chillies.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73288686",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245030",
                                  name: "Gobi Chinease Chilly",
                                  category: "Starters",
                                  description:
                                    "Gobi tossed in spicy Chinese-style chilli sauce.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.6",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "74868540",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280346",
                                  name: "Baby Corn Golden Fry",
                                  category: "Starters",
                                  description:
                                    "Crispy golden-fried babycorn with light spice.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.2",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72361529",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245028",
                                  name: "Babbycorn 65",
                                  category: "Starters",
                                  description:
                                    "Deep-fried babycorn in spicy 65 masala.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19100,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72561116",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "37153528",
                        },
                        {
                          title: "Sea Food Starter",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245043",
                                  name: "Fish 65",
                                  category: "Starters",
                                  description:
                                    "Deep-fried spicy fish bites in 65 masala.",
                                  inStock: 1,
                                  price: 31600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72262669",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245044",
                                  name: "Fish Chinease Chilly",
                                  category: "Starters",
                                  description:
                                    "Fish tossed in spicy Chinese chilli sauce.",
                                  inStock: 1,
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "72843237",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245042",
                                  name: "Finger Fish",
                                  category: "Starters",
                                  description:
                                    "Crispy fish fingers seasoned with masala.",
                                  inStock: 1,
                                  price: 31800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72024359",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245045",
                                  name: "Fish Manchurian",
                                  category: "Starters",
                                  description:
                                    "Boneless fish cooked in manchurian sauce.",
                                  inStock: 1,
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "74814808",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963775",
                                  name: "Prawns Pepper Fry",
                                  category: "Starters",
                                  imageId: "6f382ce3c0fd4e4de1d94a6cb291ed20",
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "71 ratings",
                                      ratingCountV2: "71",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72125168",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280259",
                                  name: "Prawn Manchurian",
                                  category: "Starters",
                                  imageId: "8e9f1e09cb20bb9168301cb9e5f773d8",
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72125163",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245046",
                                  name: "Prawn 65",
                                  category: "Starters",
                                  description:
                                    "Spicy deep-fried prawns with 65-style masala.",
                                  price: 31800,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "8 ratings",
                                      ratingCountV2: "8",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72125162",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "140708554",
                                  name: "Prawn Hot Pepper",
                                  category: "Starters",
                                  description:
                                    "Prawns tossed in pepper and garlic spice.",
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "82867751",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "37153530",
                        },
                      ],
                      image: "dabb1e140522bea0f8fe4e994d231e31",
                      categoryId: "37153522",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Rice And Noodles",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963872",
                              name: "Chicken Fried Rice",
                              category: "Rice And Noodles",
                              description:
                                "A slightly spicy dish made by tossing juicy chicken and rice in a flavorful sauce.",
                              imageId: "f5c8a679733819bc62c4828d77522d9d",
                              inStock: 1,
                              price: 22600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "886 ratings",
                                  ratingCountV2: "886",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72224519",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963695",
                              name: "Chicken Schezwan Rice",
                              category: "Rice And Noodles",
                              description:
                                "Wholesome stir-fried rice topped with juicy chicken chunks and grated vegetables in a thick and spicy schezwan sauce.",
                              imageId: "5e0be89847573bf93e31e6ccad7f9273",
                              inStock: 1,
                              price: 24100,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "393 ratings",
                                  ratingCountV2: "393",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "41860809",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963874",
                              name: "Chicken Noodles",
                              category: "Rice And Noodles",
                              description:
                                "A vibrant and aromatic preparation of perfectly seasoned noodles mixed with succulent chicken pieces and veggies",
                              imageId: "c9b2961ab7af6c9fc088d67b45abed19",
                              inStock: 1,
                              price: 22600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "261 ratings",
                                  ratingCountV2: "261",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "41860807",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963868",
                              name: "Egg Fried Rice",
                              category: "Rice And Noodles",
                              description:
                                "A protein-packed delicious egg fried rice.",
                              imageId: "1edf3c8eed45155abc1130b8d1785a4d",
                              inStock: 1,
                              price: 16500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "530 ratings",
                                  ratingCountV2: "530",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72125158",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963700",
                              name: "Chicken Schezwan Noodles",
                              category: "Rice And Noodles",
                              description:
                                "| Spicy | Delectable noodles tossed along with assorted fresh veggies, chicken, Schezwan sauce and spices - perfect to satisfy your hunger.",
                              imageId: "0c98cfdae57a6c59f88a29fa0c8497d4",
                              inStock: 1,
                              price: 24100,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "279 ratings",
                                  ratingCountV2: "279",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "73458072",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280372",
                              name: "Egg Schezwan Fried Rice",
                              category: "Rice And Noodles",
                              description:
                                "Spicy red Schezwan rice tossed with egg.(750ML Box)",
                              inStock: 1,
                              price: 19500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "13 ratings",
                                  ratingCountV2: "13",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "73201488",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963654",
                              name: "Mushroom Fried Rice",
                              category: "Rice And Noodles",
                              description:
                                "Fresh veggies and mushoorm tossed in a pan with steamed rice and flavorful sauces and spices.",
                              imageId: "14d615fb36e83900970dcc8db4842954",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "167 ratings",
                                  ratingCountV2: "167",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72593538",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "131948351",
                              name: "Paneer Fried Rice",
                              category: "Rice And Noodles",
                              description:
                                "Paneer cubes tossed with Indo-Chinese rice.(750ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "42 ratings",
                                  ratingCountV2: "42",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "76856459",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245015",
                              name: "Plan B Special Mixed Fried Rice (non Veg)",
                              category: "Rice And Noodles",
                              description:
                                "Loaded fried rice with egg, chicken & prawns.(750ML Box)",
                              inStock: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "73201490",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "180954753",
                              name: "Chicken 65 Rice",
                              category: "Rice And Noodles",
                              inStock: 1,
                              price: 22600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "109759435",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245012",
                              name: "Chicken-singapore Fried Rice",
                              category: "Rice And Noodles",
                              description:
                                "Spicy fried rice with a Singapore twist.(750ML Box)",
                              inStock: 1,
                              price: 24100,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "73092025",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245016",
                              name: "Plan B Special Mixed Noodles(non Veg)",
                              category: "Rice And Noodles",
                              description:
                                "Combo noodles with egg, chicken & seafood.(750ML Box)",
                              inStock: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "73870357",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963678",
                              name: "Veg Schezwan Noodles",
                              category: "Rice And Noodles",
                              imageId: "b17917032c81e5febce227cf31194f9f",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "96 ratings",
                                  ratingCountV2: "96",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72074770",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963864",
                              name: "Veg Fried Rice",
                              category: "Rice And Noodles",
                              imageId: "458bdf46fd8527f81b8bfa7e4b8ea8ad",
                              inStock: 1,
                              isVeg: 1,
                              price: 15200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "264 ratings",
                                  ratingCountV2: "264",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72178684",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963689",
                              name: "Egg Schezwan Noodles",
                              category: "Rice And Noodles",
                              description:
                                "Spicy noodles with egg and Schezwan sauce.(750ML Box)",
                              inStock: 1,
                              price: 19500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "31 ratings",
                                  ratingCountV2: "31",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72517313",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245017",
                              name: "Veg Schezwan Rice",
                              category: "Rice And Noodles",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "22 ratings",
                                  ratingCountV2: "22",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "73165683",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963870",
                              name: "Egg Noodles",
                              category: "Rice And Noodles",
                              description:
                                "Stir-fried noodles with egg and sauces.(750ML Box)",
                              inStock: 1,
                              price: 16500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "96 ratings",
                                  ratingCountV2: "96",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "41860821",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245013",
                              name: "Chicken-singapore Noodles",
                              category: "Rice And Noodles",
                              description:
                                "Tangy chicken noodles with Indo-Singapore spices.(750ML Box)",
                              inStock: 1,
                              price: 24100,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "73870356",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963659",
                              name: "Mushroom Noodles",
                              category: "Rice And Noodles",
                              description:
                                "Noodles stir-fried with mushrooms and sauces.(750ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "52 ratings",
                                  ratingCountV2: "52",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "73492561",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963866",
                              name: "Veg Noodles",
                              category: "Rice And Noodles",
                              imageId: "a5783175dba1e421560c8556cfca1640",
                              inStock: 1,
                              isVeg: 1,
                              price: 15200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "131 ratings",
                                  ratingCountV2: "131",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "41860878",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140708551",
                              name: "Mixed Veg Rice",
                              category: "Rice And Noodles",
                              description:
                                "Rice fried with assorted vegetables and spices.(750ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "82867748",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140708550",
                              name: "Mixed Veg Noodle",
                              category: "Rice And Noodles",
                              description:
                                "Veggies tossed with noodles and sauces.(750ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "82867747",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963773",
                              name: "Curd Rice",
                              category: "Rice And Noodles",
                              description:
                                "South Indian style curd-mixed rice with seasoning.",
                              inStock: 1,
                              isVeg: 1,
                              price: 14400,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.5",
                                  ratingCount: "54 ratings",
                                  ratingCountV2: "54",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "82867744",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245014",
                              name: "Curd Rice Spl",
                              category: "Rice And Noodles",
                              description:
                                "Curd rice topped with boondi and fruits.",
                              inStock: 1,
                              isVeg: 1,
                              price: 16700,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "73201486",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963876",
                              name: "Jeera Rice",
                              category: "Rice And Noodles",
                              description:
                                "Cumin-flavoured rice, simple and tasty.",
                              inStock: 1,
                              isVeg: 1,
                              price: 15200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "27 ratings",
                                  ratingCountV2: "27",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72561117",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963878",
                              name: "Ghee Rice",
                              category: "Rice And Noodles",
                              description:
                                "Mildly spiced rice flavoured with pure ghee.",
                              inStock: 1,
                              isVeg: 1,
                              price: 15200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "27 ratings",
                                  ratingCountV2: "27",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                { imageId: "No_Sugar/Pure_ghee1.png" },
                              ],
                              parentId: "73201489",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963704",
                              name: "Prawns Fried Rice",
                              category: "Rice And Noodles",
                              description:
                                "Prawns tossed with spicy fried rice.(750ML Box)",
                              price: 25500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, tomorrow",
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "68 ratings",
                                  ratingCountV2: "68",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72125166",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963711",
                              name: "Prawns Noodles",
                              category: "Rice And Noodles",
                              description:
                                "Delectable noodles tossed along with assorted fresh veggies, prawns, sauces and spices - perfect to satisfy your hunger.",
                              imageId: "dbd579e52fe2dc1574f3ee8d687b39c9",
                              price: 25500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, tomorrow",
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "16 ratings",
                                  ratingCountV2: "16",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72125167",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "f5c8a679733819bc62c4828d77522d9d",
                      categoryId: "37153518",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Main Course",
                      categories: [
                        {
                          title: "Non-veg Gravy",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963748",
                                  name: "Pepper Chicken Gravy",
                                  category: "Main Course",
                                  description:
                                    "Fiery black pepper-flavoured chicken curry.",
                                  inStock: 1,
                                  price: 26800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "554 ratings",
                                      ratingCountV2: "554",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72517314",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963744",
                                  name: "Chicken Chettinad Gravy",
                                  category: "Main Course",
                                  description:
                                    "Spicy South Indian-style chicken curry with Chettinad masala.",
                                  inStock: 1,
                                  price: 26800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "207 ratings",
                                      ratingCountV2: "207",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72873798",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "131948358",
                                  name: "Chicken Pallipalaym Gravy",
                                  category: "Main Course",
                                  description:
                                    "Dry-style chicken fry with roasted coconut and spices.",
                                  inStock: 1,
                                  price: 29900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "8 ratings",
                                      ratingCountV2: "8",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "76856454",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963760",
                                  name: "Chicken Hyderabadi Gravy",
                                  category: "Main Course",
                                  description:
                                    "Creamy, nutty chicken curry with Hyderabadi touch.",
                                  inStock: 1,
                                  price: 26800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "111 ratings",
                                      ratingCountV2: "111",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72593537",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "131948357",
                                  name: "Chicken Mughalai Gravy",
                                  category: "Main Course",
                                  description:
                                    "Mild, rich and creamy North Indian-style chicken gravy.",
                                  inStock: 1,
                                  price: 28800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "76856453",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963756",
                                  name: "Garlic Chicken Gravy",
                                  category: "Main Course",
                                  description:
                                    "Garlic-loaded spicy chicken gravy with bold flavours.",
                                  inStock: 1,
                                  price: 26800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "69 ratings",
                                      ratingCountV2: "69",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72178676",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245051",
                                  name: "Kadaai Chicken Masala",
                                  category: "Main Course",
                                  description:
                                    "North Indian-style chicken with capsicum in kadaai masala.",
                                  inStock: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "74394053",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963783",
                                  name: "Fish Curry Masala",
                                  category: "Main Course",
                                  description:
                                    "Tangy and spicy fish curry with homemade masalas.",
                                  inStock: 1,
                                  price: 29900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "18 ratings",
                                      ratingCountV2: "18",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73048419",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963791",
                                  name: "Egg Masala",
                                  category: "Main Course",
                                  imageId: "488485bda5281df508c48e75a7194bb2",
                                  inStock: 1,
                                  price: 20900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "125 ratings",
                                      ratingCountV2: "125",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72074764",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "131948356",
                                  name: "Chicken Dopiyaza Gravy",
                                  category: "Main Course",
                                  description:
                                    "Flavourful chicken curry cooked with double onions.",
                                  inStock: 1,
                                  price: 28800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "76856452",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963752",
                                  name: "Butter Chicken Gravy",
                                  category: "Main Course",
                                  imageId: "2101283e74fa6712bf065d97a3c336e9",
                                  price: 28200,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "325 ratings",
                                      ratingCountV2: "325",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72713686",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963776",
                                  name: "Mutton Chettinad Gravy",
                                  category: "Main Course",
                                  imageId: "16fc26a0e107818fe8cd13e366cb0552",
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "91 ratings",
                                      ratingCountV2: "91",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72873800",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280273",
                                  name: "Mutton Gravy",
                                  category: "Main Course",
                                  description:
                                    "Tender mutton slow-cooked in traditional spicy gravy.",
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "73165682",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245052",
                                  name: "Prawn Masala",
                                  category: "Main Course",
                                  description:
                                    "Juicy prawns tossed in spicy thick masala.",
                                  price: 29900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72125164",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "37153532",
                        },
                        {
                          title: "Veg Gravy",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963714",
                                  name: "Paneer Butter Masala",
                                  category: "Main Course",
                                  description:
                                    "A sinfully delicious tasty paneer butter masala.",
                                  imageId: "5b7cba69fdbb08280d3cd124c8c62413",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "1007 ratings",
                                      ratingCountV2: "1.0K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  imageBadges: [
                                    {
                                      imageId:
                                        "merch_bau/High%20Protein%201_1.png",
                                    },
                                  ],
                                  parentId: "72024366",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963726",
                                  name: "Kadai Paneer Gravy",
                                  category: "Main Course",
                                  imageId: "38a1ad835d31ee2eab682283ac460635",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "184 ratings",
                                      ratingCountV2: "184",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72262670",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963709",
                                  name: "Mushroom Masala",
                                  category: "Main Course",
                                  imageId: "b988d4d62445992590215d7d8ffb0e5c",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "134 ratings",
                                      ratingCountV2: "134",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72262672",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963722",
                                  name: "Mushroom Hyderabadi Gravy",
                                  category: "Main Course",
                                  imageId: "89d5a98799ef75fceb67c400d8e4b6c7",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24100,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "122 ratings",
                                      ratingCountV2: "122",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72843238",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245049",
                                  name: "Kadaai Mushroom Gravy",
                                  category: "Main Course",
                                  description:
                                    "Spicy kadaai-style gravy with capsicum and tender mushrooms.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24100,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "11 ratings",
                                      ratingCountV2: "11",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72873799",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245048",
                                  name: "Kadaai Gobi Gravy",
                                  category: "Main Course",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "72561118",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "131948355",
                                  name: "Veg Dopiyaza Gravy",
                                  category: "Main Course",
                                  description:
                                    "Rich onion-based veg curry with a hint of masala",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24100,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "76856461",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245050",
                                  name: "Mix Veg Masala",
                                  category: "Main Course",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72125161",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245047",
                                  name: "Gobi Gravy",
                                  category: "Main Course",
                                  description:
                                    "Cauliflower curry in thick spicy masala.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "74868541",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "37153531",
                        },
                      ],
                      image: "5b7cba69fdbb08280d3cd124c8c62413",
                      categoryId: "37153523",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Biryani",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128699559",
                              name: "Bucket Briyani Muttan",
                              category: "Biryani",
                              description:
                                "Flavorful mutton biryani in a big-size bucket.(750ML Box)",
                              inStock: 1,
                              price: 181400,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "74700607",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963810",
                              name: "Egg Biryani",
                              category: "Biryani",
                              description:
                                "Healthy yet wholesome boiled eggs covered in flavor-packed masala and slow cooked rice.",
                              imageId: "9f4197353bce49a3bd881f30ab6dde78",
                              inStock: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "257 ratings",
                                  ratingCountV2: "257",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "41860817",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140708549",
                              name: "Fried Chicken Biriyani",
                              category: "Biryani",
                              description:
                                "Spicy biryani topped with crispy fried chicken.(750ML Box)",
                              inStock: 1,
                              price: 30300,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "82867746",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963815",
                              name: "Fish Biryani",
                              category: "Biryani",
                              description:
                                "Richly flavored aromatic rice layered with succulent fish in a delicate blend of whole spices; served along with raita and curry.",
                              imageId: "b04fed57cb9eb2b3bc451e9c0cd3ba7a",
                              inStock: 1,
                              price: 30300,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "82 ratings",
                                  ratingCountV2: "82",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72178674",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140708548",
                              name: "Barbeque Biriyani",
                              category: "Biryani",
                              description:
                                "Smoky grilled chicken biryani with barbeque flavour.(750ML Box)",
                              inStock: 1,
                              price: 31800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "13 ratings",
                                  ratingCountV2: "13",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "82867741",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963813",
                              name: "Plain Biryani",
                              category: "Biryani",
                              description:
                                "Simple biryani with aromatic rice and masala.(750ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 16500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "310 ratings",
                                  ratingCountV2: "310",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72593539",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125301766",
                              name: "Bucket Biriyani Chicken",
                              category: "Biryani",
                              description:
                                "Chicken biryani served in party-size bucket.(750ML Box)",
                              price: 157200,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, tomorrow",
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "72457448",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963802",
                              name: "Chicken Biryani",
                              category: "Biryani",
                              description:
                                "Rich and aromatic preparation with juicy chicken cooked in a rich masala layered with aromatic rice; served with raita.",
                              imageId: "d9722a1dceead7cdc2e40dc4e9bed3fd",
                              price: 25500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, tomorrow",
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "1402 ratings",
                                  ratingCountV2: "1.4K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "41860801",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963804",
                              name: "Mutton Biryani",
                              category: "Biryani",
                              description:
                                "Slow-cooked aromatic rice layered with marinated mutton pieces in a delicate blend of whole spices; served with raita.",
                              imageId: "42214d0934bd2447e9d5e1ab963386bd",
                              price: 33100,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, tomorrow",
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "503 ratings",
                                  ratingCountV2: "503",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "41860850",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963817",
                              name: "Prawns Biryani",
                              category: "Biryani",
                              description:
                                "Spicy biryani made with juicy prawns.(750ML Box)",
                              price: 30300,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, tomorrow",
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "89 ratings",
                                  ratingCountV2: "89",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72125165",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "d9722a1dceead7cdc2e40dc4e9bed3fd",
                      categoryId: "37153517",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Tandoor Itesm",
                      categories: [
                        {
                          title: "Tandoori Items",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963779",
                                  name: "Tandoori Chicken",
                                  category: "Tandoor Itesm",
                                  description:
                                    "Traditional red-marinated chicken grilled in tandoor.",
                                  imageId: "26ee20f400b748138938d8d3cd7174b2",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "29883564",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Full",
                                            price: 549,
                                            default: 1,
                                            id: "93356626",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 333,
                                            id: "93356627",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "29883564",
                                            variationId: "93356626",
                                          },
                                        ],
                                        price: 54900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "29883564",
                                            variationId: "93356627",
                                          },
                                        ],
                                        price: 33300,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 54900,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "1292 ratings",
                                      ratingCountV2: "1.3K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72024371",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963789",
                                  name: "Chicken Tikka",
                                  category: "Tandoor Itesm",
                                  imageId: "4895a58429e7e284386c900c855cf485",
                                  inStock: 1,
                                  price: 31600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "301 ratings",
                                      ratingCountV2: "301",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "41860810",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245061",
                                  name: "Malai Tikka",
                                  category: "Tandoor Itesm",
                                  description:
                                    "Creamy and mild boneless chicken grilled till soft.",
                                  inStock: 1,
                                  price: 33100,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.3",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73458074",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245063",
                                  name: "Reshmi Kabab",
                                  category: "Tandoor Itesm",
                                  description:
                                    "Smooth, creamy chicken kabab with a melt-in-mouth texture.",
                                  inStock: 1,
                                  price: 33100,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73458081",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245057",
                                  name: "Chicken Seekh Kabab",
                                  category: "Tandoor Itesm",
                                  description:
                                    "Minced chicken skewers grilled with desi spices.",
                                  inStock: 1,
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  imageBadges: [
                                    {
                                      imageId:
                                        "merch_bau/High%20Protein%201_1.png",
                                    },
                                  ],
                                  parentId: "73132610",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245059",
                                  name: "Karli Mirchi Tikka",
                                  category: "Tandoor Itesm",
                                  description:
                                    "Spicy green chilli-marinated chicken tikka.",
                                  inStock: 1,
                                  price: 31600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "72361532",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963782",
                                  name: "Grilled Chicken",
                                  category: "Tandoor Itesm",
                                  imageId: "ff6013eb645789026e3f385f9d1fd793",
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "29883562",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Full",
                                            price: 549,
                                            default: 1,
                                            id: "93356622",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 333,
                                            id: "93356623",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "29883562",
                                            variationId: "93356622",
                                          },
                                        ],
                                        price: 54900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "29883562",
                                            variationId: "93356623",
                                          },
                                        ],
                                        price: 33300,
                                      },
                                    ],
                                  },
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 54900,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "776 ratings",
                                      ratingCountV2: "776",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72125159",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245056",
                                  name: "Afghani Tandoori Chicken",
                                  category: "Tandoor Itesm",
                                  imageId: "1b832443af82be3d2bae14b1d111ce3c",
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "29883561",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Full",
                                            price: 549,
                                            default: 1,
                                            id: "93356620",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 333,
                                            id: "93356621",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "29883561",
                                            variationId: "93356620",
                                          },
                                        ],
                                        price: 54900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "29883561",
                                            variationId: "93356621",
                                          },
                                        ],
                                        price: 33300,
                                      },
                                    ],
                                  },
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 54900,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "47 ratings",
                                      ratingCountV2: "47",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72125156",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "140708555",
                                  name: "Pepper Grill",
                                  category: "Tandoor Itesm",
                                  description:
                                    "Chicken grilled with crushed pepper for extra punch.",
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "42537047",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Full",
                                            price: 549,
                                            default: 1,
                                            id: "135940567",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 333,
                                            id: "135940568",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "42537047",
                                            variationId: "135940567",
                                          },
                                        ],
                                        price: 54900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "42537047",
                                            variationId: "135940568",
                                          },
                                        ],
                                        price: 33300,
                                      },
                                    ],
                                  },
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 54900,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "12 ratings",
                                      ratingCountV2: "12",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "82867749",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245058",
                                  name: "Irani Tandoori Chicken",
                                  category: "Tandoor Itesm",
                                  description:
                                    "Juicy chicken marinated Irani-style and tandoor-roasted.",
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "29883563",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Full",
                                            price: 549,
                                            default: 1,
                                            id: "93356624",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 333,
                                            id: "93356625",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "29883563",
                                            variationId: "93356624",
                                          },
                                        ],
                                        price: 54900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "29883563",
                                            variationId: "93356625",
                                          },
                                        ],
                                        price: 33300,
                                      },
                                    ],
                                  },
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 54900,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "12 ratings",
                                      ratingCountV2: "12",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72620797",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "37153535",
                        },
                        {
                          title: "Veg Tandoori",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963803",
                                  name: "Paneer Tikka",
                                  category: "Tandoor Itesm",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "90 ratings",
                                      ratingCountV2: "90",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72262675",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280313",
                                  name: "Paneer Tok",
                                  category: "Tandoor Itesm",
                                  description:
                                    "Paneer-stuffed parotta with spicy masala twist.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 32900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "72262676",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "37153536",
                        },
                      ],
                      image: "26ee20f400b748138938d8d3cd7174b2",
                      categoryId: "37153525",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Breads",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963658",
                              name: "Butter Naan",
                              category: "Breads",
                              description:
                                "North Indian bread with a generous serving of butter that tastes brilliant when paired with a gravy.",
                              imageId: "97404f3dfeb3810bd19aa20db18de13e",
                              inStock: 1,
                              isVeg: 1,
                              price: 6900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "1111 ratings",
                                  ratingCountV2: "1.1K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72024355",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963687",
                              name: "Phulka Roti",
                              category: "Breads",
                              imageId: "7af9e3fb4d688037aac4cb1415ebfc0c",
                              inStock: 1,
                              isVeg: 1,
                              price: 3300,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "453 ratings",
                                  ratingCountV2: "453",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72024369",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963653",
                              name: "Plain Naan",
                              category: "Breads",
                              imageId: "b1750b94d09324b657f07caeeb3640a0",
                              inStock: 1,
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "456 ratings",
                                  ratingCountV2: "456",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72074767",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963672",
                              name: "Tandoori Roti",
                              category: "Breads",
                              imageId: "ffa17c5c451407b27c961c834aa1f2e5",
                              inStock: 1,
                              isVeg: 1,
                              price: 4200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "267 ratings",
                                  ratingCountV2: "267",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72178683",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963663",
                              name: "Garlic Naan",
                              category: "Breads",
                              imageId: "0eaa2c9f616ebb01d177284b80230b69",
                              inStock: 1,
                              isVeg: 1,
                              price: 8300,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "154 ratings",
                                  ratingCountV2: "154",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72024362",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245007",
                              name: "Chapathi",
                              category: "Breads",
                              description:
                                "Soft whole wheat flatbread, perfect with gravies.",
                              inStock: 1,
                              isVeg: 1,
                              price: 3900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "57 ratings",
                                  ratingCountV2: "57",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72125157",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280329",
                              name: "Folding Naan",
                              category: "Breads",
                              description:
                                "Folded soft naan, easy to tear and dip.",
                              inStock: 1,
                              isVeg: 1,
                              price: 8300,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72024360",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280323",
                              name: "Cheese Naan",
                              category: "Breads",
                              description:
                                "Naan stuffed with gooey cheese and tandoor-cooked.",
                              inStock: 1,
                              isVeg: 1,
                              price: 8300,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72178671",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245008",
                              name: "Paneer Kulcha",
                              category: "Breads",
                              description:
                                "Tandoori kulcha filled with spicy paneer stuffing.",
                              inStock: 1,
                              isVeg: 1,
                              price: 8800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72262674",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280351",
                              name: "Gobi Parotta",
                              category: "Breads",
                              description:
                                "Flaky parotta stuffed with spiced cauliflower.",
                              inStock: 1,
                              isVeg: 1,
                              price: 8800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72074765",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963677",
                              name: "Butter Tandoori Roti",
                              category: "Breads",
                              description:
                                "Crispy wheat roti roasted in tandoor with butter.",
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "116 ratings",
                                  ratingCountV2: "116",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72024356",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245010",
                              name: "Tandoori Wheat Parotta",
                              category: "Breads",
                              description:
                                "Healthy wheat parotta cooked in tandoor.",
                              inStock: 1,
                              isVeg: 1,
                              price: 6600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "13 ratings",
                                  ratingCountV2: "13",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72873801",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280349",
                              name: "Lachcha Parotta",
                              category: "Breads",
                              description:
                                "Multi-layered flaky parotta, crispy and soft.",
                              inStock: 1,
                              isVeg: 1,
                              price: 6600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72178677",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963693",
                              name: "Kulcha Roti",
                              category: "Breads",
                              description:
                                "Soft leavened bread with desi flavours.",
                              inStock: 1,
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "89 ratings",
                                  ratingCountV2: "89",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72804551",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280355",
                              name: "Pudina Parotta",
                              category: "Breads",
                              description: "Flavoured parotta with mint touch.",
                              inStock: 1,
                              isVeg: 1,
                              price: 6600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72024370",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280341",
                              name: "Butter Kulcha Roti",
                              category: "Breads",
                              description:
                                "Soft roti brushed with butter and tandoor-cooked.",
                              inStock: 1,
                              isVeg: 1,
                              price: 6600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "73567096",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280353",
                              name: "Aloo Parotta",
                              category: "Breads",
                              description:
                                "North Indian paratha stuffed with spiced mashed potato.",
                              isVeg: 1,
                              price: 8800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, tomorrow",
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "19 ratings",
                                  ratingCountV2: "19",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72178669",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "97404f3dfeb3810bd19aa20db18de13e",
                      categoryId: "37153516",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Drinks (beverages)",
                      categories: [
                        {
                          title: "Milkshakes",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280342",
                                  name: "Chocolate Milkshake",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Rich chocolate milkshake.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20700,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "74542570",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280337",
                                  name: "Oreo Milkshake",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Crunchy Oreo blended into milkshake.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20700,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "74868550",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280347",
                                  name: "Pista Milkshake",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Pista-flavoured creamy milkshake.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20700,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "74868551",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280339",
                                  name: "Blackcurrent Milkshake",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Fruity milkshake with blackcurrant essence.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20700,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "72843235",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280335",
                                  name: "Strawberry Milkshake",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Sweet strawberry-flavoured shake.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "74868557",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245054",
                                  name: "Butterscotch Milkshake",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Creamy shake with butterscotch flavour.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.5",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "74868536",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280327",
                                  name: "Mango Milkshake",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Thick shake with sweet mango flavour.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73960524",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245055",
                                  name: "Vanilla Milkshake",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Smooth vanilla-flavoured milkshake.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 13800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "72843239",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "37153534",
                        },
                        {
                          title: "Fresh Juice",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "48606686",
                                  name: "Orange Juice",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Pulpy orange juice, naturally sweet.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 13800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "20 ratings",
                                      ratingCountV2: "20",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  imageBadges: [
                                    {
                                      imageId:
                                        "sachin/OCT2025/NO%20ADDEED%20SUGAR.png",
                                    },
                                  ],
                                  parentId: "72178679",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "128949062",
                                  name: "Pomegranate",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Healthy, fresh pomegranate juice.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 13800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "74868552",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "48606688",
                                  name: "Apple Juice",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Freshly extracted apple juice.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12400,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "13 ratings",
                                      ratingCountV2: "13",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72178670",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "128949130",
                                  name: "Mosambi",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Sweet lime juice, chilled and fresh.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 10500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                  parentId: "74868548",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "128949072",
                                  name: "Lime Soda",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Fizzy lime drink, sweet or salty.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 8300,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.3",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "74868543",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "128949069",
                                  name: "Mint Lime Soda",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Lime soda blended with mint flavour.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 8300,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.6",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "74868546",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245053",
                                  name: "Fresh Lime",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Simple lime juice with sugar/salt.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 6900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "74042129",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280320",
                                  name: "Mint Lime Juice",
                                  category: "Drinks (beverages)",
                                  description:
                                    "Lime juice with refreshing mint.(300-350 ML Box)",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 8300,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "76856458",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "37153533",
                        },
                      ],
                      categoryId: "37153524",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Charcoal Shawarma",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167138679",
                              name: "Plate Peri Peri Shawarma",
                              category: "Charcoal Shawarma",
                              description:
                                "Fiery peri peri chicken served in a plate with creamy and spicy fillings.",
                              inStock: 1,
                              price: 21100,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "100808970",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167138676",
                              name: "Plate Bbq Shawarma",
                              category: "Charcoal Shawarma",
                              description:
                                "BBQ-flavored shawarma chicken served on a plate with mayo, veggies, and sauces.",
                              inStock: 1,
                              price: 21100,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "100808967",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167138678",
                              name: "Plate Mexican Shawarma",
                              category: "Charcoal Shawarma",
                              description:
                                "Mexican-style grilled chicken served in plate shawarma style with zesty toppings.",
                              inStock: 1,
                              price: 21100,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "100808969",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280275",
                              name: "Mexican Shawarma",
                              category: "Charcoal Shawarma",
                              description:
                                "A twist of Mexican spices with grilled chicken wrapped in a soft shawarma roll.",
                              inStock: 1,
                              price: 18200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "18 ratings",
                                  ratingCountV2: "18",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72024364",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167138677",
                              name: "Plate Hot Garlic Shawarma",
                              category: "Charcoal Shawarma",
                              description:
                                "Spicy garlic chicken shawarma served open plate-style with layered fillings.",
                              inStock: 1,
                              price: 21100,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "100808968",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280272",
                              name: "Peri Peri Shawarma",
                              category: "Charcoal Shawarma",
                              description:
                                "Shawarma loaded with spicy peri peri marinated chicken and creamy sauce.",
                              inStock: 1,
                              price: 18200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72024368",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167138674",
                              name: "Bbq Shawarma",
                              category: "Charcoal Shawarma",
                              description:
                                "Shawarma wrap with BBQ-style grilled chicken and spicy sauces.",
                              inStock: 1,
                              price: 18200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "100808952",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167138675",
                              name: "Hot Garlic Shawarma",
                              category: "Charcoal Shawarma",
                              description:
                                "Shawarma filled with spicy garlic-flavored chicken and tangy sauce.",
                              inStock: 1,
                              price: 18200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "100808962",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "60032912",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Starters/fried Items",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245004",
                              name: "Lollipop Crispy",
                              category: "Starters/fried Items",
                              description:
                                "Crispy chicken lollipop tossed in spicy masala.",
                              inStock: 1,
                              price: 27300,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72178678",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280301",
                              name: "Crab Lollipop",
                              category: "Starters/fried Items",
                              description:
                                "Spicy crab meat shaped and fried like lollipop.",
                              inStock: 1,
                              price: 31800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72178673",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280282",
                              name: "Chicken Popcorn",
                              category: "Starters/fried Items",
                              inStock: 1,
                              price: 24200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72178672",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280305",
                              name: "Fish Finger",
                              category: "Starters/fried Items",
                              description:
                                "Crispy golden fish sticks with desi seasoning.",
                              inStock: 1,
                              price: 31800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.4",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "72178675",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120244999",
                              name: "Boneless Strips(4pcs)",
                              category: "Starters/fried Items",
                              inStock: 1,
                              price: 30300,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "74868532",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245003",
                              name: "Wings(4pcs)",
                              category: "Starters/fried Items",
                              description:
                                "Chicken wings fried or grilled with masala coating.",
                              inStock: 1,
                              price: 24200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72074771",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245005",
                              name: "Peri Peri Fries",
                              category: "Starters/fried Items",
                              description:
                                "French fries tossed in peri peri seasoning for extra zing.",
                              inStock: 1,
                              isVeg: 1,
                              price: 18200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "74814809",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245001",
                              name: "French Fries",
                              category: "Starters/fried Items",
                              description:
                                "Classic crispy potato fries, golden and salted.",
                              inStock: 1,
                              isVeg: 1,
                              price: 15200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.5",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "74868539",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "37153515",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Soup",
                      categories: [
                        {
                          title: "Non-veg Soup",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245027",
                                  name: "Planet B Special Chicken Soup",
                                  category: "Soup",
                                  imageId: "341f54316e12c33e139c13b4a3266282",
                                  inStock: 1,
                                  price: 10900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "34 ratings",
                                      ratingCountV2: "34",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72224523",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963822",
                                  name: "Chicken Clear Soup",
                                  category: "Soup",
                                  description:
                                    "Light chicken broth with herbs and shredded chicken.",
                                  inStock: 1,
                                  price: 8500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "85 ratings",
                                      ratingCountV2: "85",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "74362571",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963825",
                                  name: "Sweet Corn Chicken Soup",
                                  category: "Soup",
                                  inStock: 1,
                                  price: 9700,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.5",
                                      ratingCount: "43 ratings",
                                      ratingCountV2: "43",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72759797",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280271",
                                  name: "Manchow Chicken Soup",
                                  category: "Soup",
                                  description:
                                    "Chicken soup topped with crispy noodles and bold flavor.",
                                  inStock: 1,
                                  price: 9700,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.5",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72262671",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963827",
                                  name: "Hot & Sour Chicken Soup",
                                  category: "Soup",
                                  description:
                                    "Spicy and tangy chicken soup with Indo-Chinese kick.",
                                  inStock: 1,
                                  price: 9700,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.6",
                                      ratingCount: "79 ratings",
                                      ratingCountV2: "79",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73737547",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963832",
                                  name: "Mutton Soup",
                                  category: "Soup",
                                  imageId: "f9fffb22e828ebef52beb77507ccacd4",
                                  price: 10900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "288 ratings",
                                      ratingCountV2: "288",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73048420",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "37153527",
                        },
                        {
                          title: "Veg Soup",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280252",
                                  name: "Planet B Spl Veg Soup",
                                  category: "Soup",
                                  description:
                                    "Special veg soup with mixed veggies and secret masala.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 8500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72457452",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118280241",
                                  name: "Manchow Veg Soup",
                                  category: "Soup",
                                  description:
                                    "Indo-Chinese soup with fried noodles and bold flavor.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 7300,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "76856457",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245024",
                                  name: "Hot & Sour Veg Soup",
                                  category: "Soup",
                                  description:
                                    "Tangy and spicy veg soup with crunchy veggies.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 7300,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72361531",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245025",
                                  name: "Veg Sweet Corn Soup",
                                  category: "Soup",
                                  description:
                                    "Creamy corn soup with sweet flavor and veg chunks.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 7300,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "14 ratings",
                                      ratingCountV2: "14",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72561119",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28963800",
                                  name: "Veg Clear Soup",
                                  category: "Soup",
                                  description:
                                    "Light and healthy veg soup with clear broth.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 7300,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.0",
                                      ratingCount: "29 ratings",
                                      ratingCountV2: "29",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "73048421",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "120245023",
                                  name: "Chinease Mushroom Soup",
                                  category: "Soup",
                                  description:
                                    "Chinese-style soup with soft mushrooms and mild spice.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 7300,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.1",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#FFF0CD", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_low",
                                      ratingTextColor: "rating_low",
                                      ratingCountTextColor: "rating_low",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "72224520",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "37153526",
                        },
                      ],
                      image: "f9fffb22e828ebef52beb77507ccacd4",
                      categoryId: "37153521",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Barbeque",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280258",
                              name: "Alfam Barbeque",
                              category: "Barbeque",
                              description:
                                "Arabian-style full grilled chicken with mayo dip.",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "29883557",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Full",
                                        price: 549,
                                        default: 1,
                                        id: "93356611",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Half",
                                        price: 333,
                                        id: "93356612",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "29883557",
                                        variationId: "93356611",
                                      },
                                    ],
                                    price: 54900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "29883557",
                                        variationId: "93356612",
                                      },
                                    ],
                                    price: 33300,
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 54900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72361528",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245018",
                              name: "Fish Barbeque(b/l)",
                              category: "Barbeque",
                              inStock: 1,
                              price: 33100,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "72457450",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280250",
                              name: "Classic Barbeque",
                              category: "Barbeque",
                              description: "Traditional smoky grilled chicken.",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "29883558",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Full",
                                        price: 549,
                                        default: 1,
                                        id: "93356613",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Half",
                                        price: 333,
                                        id: "93356614",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "29883558",
                                        variationId: "93356613",
                                      },
                                    ],
                                    price: 54900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "29883558",
                                        variationId: "93356614",
                                      },
                                    ],
                                    price: 33300,
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 54900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72361530",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118280255",
                              name: "Pepper Barbeque",
                              category: "Barbeque",
                              description:
                                "Grilled chicken with black pepper twist.",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "29883559",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Full",
                                        price: 549,
                                        default: 1,
                                        id: "93356615",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Half",
                                        price: 333,
                                        id: "93356616",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "29883559",
                                        variationId: "93356615",
                                      },
                                    ],
                                    price: 54900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "29883559",
                                        variationId: "93356616",
                                      },
                                    ],
                                    price: 33300,
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 54900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "72178681",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120245019",
                              name: "Barbeque Wings",
                              category: "Barbeque",
                              description:
                                "Chicken wings grilled with BBQ glaze.",
                              inStock: 1,
                              price: 18200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "72074763",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "37153519",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Falooda",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949063",
                              name: "Royal Special Falooda",
                              category: "Falooda",
                              description:
                                "Loaded falooda with fruits and nuts.(300-350 ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "45 ratings",
                                  ratingCountV2: "45",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "74868553",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949071",
                              name: "Blackcurrent Falooda",
                              category: "Falooda",
                              description:
                                "Falooda with blackcurrant ice cream.(300-350 ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 20600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "74868530",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949057",
                              name: "Butterscotch Falooda",
                              category: "Falooda",
                              description:
                                "Sweet falooda with butterscotch scoop.(300-350 ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 20600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "74868534",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949070",
                              name: "Chocolate Falooda",
                              category: "Falooda",
                              description:
                                "Chocolate ice cream with falooda mix.(300-350 ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 20600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "74868538",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949056",
                              name: "Mango Falooda",
                              category: "Falooda",
                              description:
                                "Fruity mango falooda with sev and ice cream.(300-350 ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 17800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "74868545",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949073",
                              name: "Strawberry Falooda",
                              category: "Falooda",
                              description:
                                "Pink strawberry falooda with ice cream.(300-350 ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 20600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "74868556",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949067",
                              name: "Vanilla Falooda",
                              category: "Falooda",
                              description:
                                "Classic vanilla ice cream falooda.(300-350 ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 16500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "74868559",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "42999779",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Ice Creams",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "131948353",
                              name: "Fresh Salad With Icecream",
                              category: "Ice Creams",
                              description:
                                "Fruit salad served with scoop of ice cream.",
                              inStock: 1,
                              isVeg: 1,
                              price: 19100,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.7",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#FFF0CD", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_low",
                                  ratingTextColor: "rating_low",
                                  ratingCountTextColor: "rating_low",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "76856455",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140708553",
                              name: "Pista Ice Cream",
                              category: "Ice Creams",
                              description: "Nutty pista scoop.",
                              inStock: 1,
                              isVeg: 1,
                              price: 13800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "82867750",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949064",
                              name: "Mango",
                              category: "Ice Creams",
                              description: "Mango-flavoured ice cream.",
                              inStock: 1,
                              isVeg: 1,
                              price: 13800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "74868544",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949061",
                              name: "Strawberry",
                              category: "Ice Creams",
                              description: "Sweet strawberry ice cream.",
                              inStock: 1,
                              isVeg: 1,
                              price: 13800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "74868555",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949044",
                              name: "Blackcurrent",
                              category: "Ice Creams",
                              description:
                                "Fruity blackcurrant ice cream scoop.",
                              inStock: 1,
                              isVeg: 1,
                              price: 13800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "74868529",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "48606260",
                              name: "Butterscotch Ice Cream",
                              category: "Ice Creams",
                              description:
                                "Crunchy butterscotch flavoured scoop.",
                              inStock: 1,
                              isVeg: 1,
                              price: 13800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "74868535",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949049",
                              name: "Chocolate",
                              category: "Ice Creams",
                              description:
                                "Rich chocolate-flavoured ice cream.",
                              inStock: 1,
                              isVeg: 1,
                              price: 13800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "74868537",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140708552",
                              name: "Choco Vanilla Icecream",
                              category: "Ice Creams",
                              description:
                                "Duo scoop with choco and vanilla blend.",
                              inStock: 1,
                              isVeg: 1,
                              price: 8800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "82867743",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949059",
                              name: "Vanilla",
                              category: "Ice Creams",
                              description: "Classic vanilla scoop.",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "74868558",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "42999777",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Mojitos",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949048",
                              name: "Bluecuraco Mojito",
                              category: "Mojitos",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "76856447",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949027",
                              name: "Lime Mint Mojito",
                              category: "Mojitos",
                              description:
                                "Classic mojito with lemon and mint.(300-350 ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "74868542",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949008",
                              name: "Bubble Gum",
                              category: "Mojitos",
                              description:
                                "Sweet bubblegum flavoured chilled drink.(300-350 ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "76856449",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "128949028",
                              name: "Mint Mojito",
                              category: "Mojitos",
                              description:
                                "Refreshing soda with mint flavour.(300-350 ML Box)",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              parentId: "74868547",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "42999773",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Egg",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28963766",
                              name: "Egg Podimas",
                              category: "Egg",
                              description:
                                "Scrambled egg with onion, chilli and South Indian masala.",
                              inStock: 1,
                              price: 6100,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "136 ratings",
                                  ratingCountV2: "136",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "82867745",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "48515743",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 12420007000582"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "PlanetB Family Restaurant",
                      area: "Kumalankuttai",
                      completeAddress:
                        "133, Perundurai Rd, Kumanan Kuttai,Erode-11",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "fc49d5ff-0a13-42a1-9fb8-8966d877b2e8",
  sid: "nxx0e2b2-4c11-4a1b-b46e-c0ad6445bce8",
  deviceId: "18d18198-433e-3332-b4f2-a7eb4c2957b8",
  csrfToken: "MWRav55ceUZj-NSOLrcdhcn4bWxKomG3Y53TO4Wc",
};

export default resMenu;
