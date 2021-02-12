var config = {
    //Dependencies
    style: 'mapbox://styles/npontone/ckkygb9tr2prk17qo8prpezqr',
    accessToken: 'pk.eyJ1IjoibnBvbnRvbmUiLCJhIjoiY2traW92bjVvMGMyYjJ3cW50NXcxMmN0ZiJ9.-Pn1cLAop7SM5aNliAUkxQ',

    //Style Selections
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,

    //Header settings.
    alignment: 'left',
    title: 'Wolves near Kootenay National Park',
    subtitle: 'An investigation of human wolf interactions',
    byline: 'By GEOM4001 Group 2',
    footer: 'Source: source citations, etc.',

    //Storymap chapters start here.
    chapters: [
      {
          id: 'Wolf-story-chapter-1',
          title: 'Chapter 1: Wolves in Kootenay National Park',
          image: 'images/Kootenay.png',
          description: 'Kootenay National Park lies in the southeastern part of British Columbia and occupies an area of approximately 1,406 square kilometers. This area showcases many impressive landscapes including glaciers, mountains and chasms. While most visitors enjoy the scenery along Highway 93, there are various hiking trails within the park limits. Perhaps one of the most attractive activities in the park is the Radium Hot Springs where visitors can soak. Kootenay is also home to many species such as mountain goats, whitetail deer and the Northwestern Wolf. (Kootenay Rockies, 2021).',
          location: {
            center: { lon: -116.20810, lat: 50.94746 },
                      zoom: 8.71,
                      pitch: 56.50,
                      bearing: -22.57
          },
          onChapterEnter: [
              {
                   layer: 'WolfPoints',
                   opacity: 0
               },
               {
                  layer: 'hwy93label',
                  opacity:0
               },
               {
                  layer: "route93-2",
                  opacity: 0

               },
          ],
          onChapterExit: [
              // {
              //     layer: ',
              //     opacity: 0
              // }
          ]
      },

        {
            id: 'Wolf-Story-Chapter-2',
            //Background on the species of wolf in Kootenay national park. Extent of kootenay national park,
            // and wolf location data.
            title: 'Chapter 2: Northwestern Wolves.',
            image: 'images/Wolf.png',
            description: 'Northwestern wolves (C. lupus occidentalis) are a subspecies of gray wolf in North America. There are many colour variations including black, white and tan. They are found in Alaska, to the Northwestern United States in rock mountain areas. This apex predator lives in packs of 6-12 with distinct hierarchical roles. Wolves are most active at dawn and dusk and can spend up to 10 hours of their day on the move. These animals have a varied diet including hares, caribou and beavers. Northwestern wolves are threatened due to trapping as well as habitat fragmentation.',
            //Focuses camera on an area with high wolf activity.
            location: {
              center: { lon: -116.06928, lat: 51.02452 },
                        zoom: 8.17,
                        pitch: 0.00,
                        bearing: -4.76
            },
            onChapterEnter: [
                 {
                     layer: 'WolfPoints',
                     opacity: 1
                 }

            ],
            onChapterExit: [
                 {
                     layer: 'hwy93label',
                     opacity: 0
                 }
            ]
        },

        {
              id: 'Wolf-story-chapter-3',
              title: 'Chapter 3:  Highway 93',
              image: 'images/hwy.png',
              description: 'Highway 93 otherwise known as the Icefields Parkway runs from Jasper, Alberta south into the Northwestern United States. This road was built parallel to the continental divide and offers almost 230 kilometers of spectacular mountainous views (Highway 93…, Icefields Parkway). The highway is fully paved with wide shoulders and a maximum speed of 90 km/hr (Tips for…, Banff and Beyond).',

              location: {
                center: { lon: -116.15278, lat: 51.00962 },
                          zoom: 10.44,
                          pitch: 1.50,
                          bearing: -39.14
              },
              onChapterEnter: [
                   {
                       layer: 'route93-2',
                       opacity: 1
                   },
                   {
                      layer: 'hwy93label',
                      opacity: 1
                   }
              ],
              onChapterExit: [
                {
                    layer: 'route93-2',
                    opacity: 0
                },
                {
                   layer: 'hwy93label',
                   opacity: 0
                }
              ]
            },

          {
                id: 'Wolf-story-chapter-4',
                title: 'Chapter 4: Wolf Mortality',
                image: 'images/hwywolf.png',
                description: 'Unfortunately, as the wolves often travel near the highway there are many instances where wolves have been struck by vehicles (Calgary Herald, 2014), and railways.<canvas id="myChart" width="400" height="400"></canvas>',
                location: {
                  center: { lon: -116.11113, lat: 51.21970 },
                            zoom: 11.47,
                            pitch: 60.00,
                            bearing: 45.64
                },
                onChapterEnter: [
                  {
                      layer: 'route93-2',
                      opacity: 1
                  },
                  {
                     layer: 'hwy93label',
                     opacity: 1
                  }
                ],
                onChapterExit: [
                    // {
                    //     layer: 'layer-name',
                    //     opacity: 0
                    // }
                ]
              },
              {

                  id: 'Wolf-story-chapter-5',
                  title: 'Chapter 5: Adaptations',
                  image: 'images/hwywolf.png',
                  description: 'Thankfully, some changes have been implemented regarding the safety of wolves in surrounding parks such as Yoho and Banff National Parks. The <a href=https://calgaryherald.com/news/kootenay-national-park-gets-funding-to-reduce-wildlife-collisions-on-highway-93-s> animal underpasses </a> an Kootenay National Park are the most recent addition in these areas (added in 2013). The results in Banff National Park prove promising as there has been a reduction in wildlife vehicle collisions by 80% (Calgary Herald, 2014).<iframe width="350" height="200" src="https://www.youtube.com/embed/ND0D3bVbM7Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                  location: {
                    center: { lon: -115.95490, lat: 50.99710 },
                              zoom: 13.91,
                              pitch: 49.00,
                              bearing: -120.36
                  },
                  onChapterEnter: [
                    {
                        layer: 'route93-2',
                        opacity: 1
                    },
                    {
                       layer: 'hwy93label',
                       opacity: 1
                    },
                    {
                        layer: 'underpasses',
                        opacity: 1
                    },
                    {
                        layer: 'underpass-label',
                        opacity: 1
                    },

                  ],
                  onChapterExit: [
                      // {
                      //     layer: 'layer-name',
                      //     opacity: 0
                      // }
                  ]
                },
              ]
            };
