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
    footer: '<p> Sources </p> <p style="text-align:left"> Altalis. (2021). Municipal Boundaries [Shapefile]. Retrieved from: https://www.altalis.com/map Animalia.<br> Northwestern Wolf. Retrieved from http://animalia.bio/northwestern-wolf </br> <br>Banff and Beyond. Tips for Driving the Icefields Parkway. Retrieved from http://banffandbeyond.com/tips-for-driving-the-icefields-parkway/ <br> Bartlett, Tim. National Post. (2013). Banff motorcyclist pursued by massive grey wolf along stretch of B.C. highway, takes pictures. Retrieved from https://nationalpost.com/news/canada/banff-motorcyclist-pursued-by-massive-grey-wolf-along-stretch-of-b-c-highway-takes-pictures <br> British Columbia. Kootenay National Park. Retrieved from http://britishcolumbia.com/things-to-do-and-see/parks-and-trails/kootenay-rockies/kootenay-national-park/) </br> <br>  Calgary Herald. (2014). Wolves caught on camera using underpass. Retrieved from https://calgaryherald.com/news/local-news/wolves-caught-on-camera-using-underpasses. </br><br>  Government of Alberta. (2020). Banff Open Data [Shapefile]. Retrieved from: https://maps.banff.ca/opendata/ </br> <br>  Government of British Columbia. (2020). National Parks of Canada within British Columbia[Shapefile]. Retrieved from https://catalogue.data.gov.bc.ca/dataset/national-parks-of-canada-within-british-columbia.</br> <br> Government of Canada. (2015). Cadastral Information for Banff National Park of Canada [Shapefile]. Retrieved from https://open.canada.ca/data/en/dataset/54fbd5fd-7c16-4894-a2f6-c2021b06cf01 </br> <br>  Government of Canada. (2017). Wildlife Mortality - Banff [CVS]. Retrieved from: https://open.canada.ca/data/en/dataset/6aa18934-5fec-4f12-8dd7-8356555d0576 </br><br>Kootenay Rockies. (2021). Kootenay National Park. Retrieved from (https://www.kootenayrockies.com/partner/kootenay-national-park/ </br> <br>Ministry of Transportaion of Alberta. (2020). Provincial Highways [Shapefile]. Retrieved from: http://www.transportation.alberta.ca/PlanningTools/Data/GIS/. </br> <br>The Icefields Parkway. Highway 93- Mile Zero in Jasper to Mile 2,878 in Arizona. Retrieved from https://icefieldsparkway.com/news/article/highway-93-mile-zero-in-jasper-to-mile-2878-in-arizona. </br> <br>Villela, Dawn. Denver Post. Associated Press File Photo. Retrieved from https://www.denverpost.com/2020/02/13/colorado-wolves-dna-tests/ </br> <br>VOX. (2017, July 03). Wildlife crossings stop roadkill. Why arent there more? [Video]. Youtube. https://www.youtube.com/watch?v=ND0D3bVbM7Y  </br> </p>',    //Places citiations in the footnotes. Each citation is places on a new line.


    //Storymap chapters start here.

    //Chapter 1
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
          //Choose which layers are visible when entering/exiting this chapter.
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
               {
                  layer: "underpass-label",
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

    //Chapter 2
        {
            id: 'Wolf-Story-Chapter-2',
            //Background on the species of wolf in Kootenay national park. Extent of kootenay national park,
            // and wolf location data.
            title: 'Chapter 2: Northwestern Wolves.',
            image: 'images/Wolf.png',
            description: 'Northwestern wolves (C. lupus occidentalis) are a subspecies of gray wolf in North America. There are many colour variations including black, white and tan. They are found in Alaska, to the Northwestern United States in rock mountain areas. This apex predator lives in packs of 6-12 with distinct hierarchical roles. Wolves are most active at dawn and dusk and can spend up to 10 hours of their day on the move. These animals have a varied diet including hares, caribou and beavers. Northwestern wolves are threatened due to trapping as well as habitat fragmentation. Pictured on the map is the locations of two wolves that live in this region, observed using GPS tags',
            //Focuses camera on an area with high wolf activity.
            location: {
              center: { lon: -116.06928, lat: 51.02452 },
                        zoom: 8.17,
                        pitch: 0.00,
                        bearing: -4.76
            },
            //Choose which layers are visible when entering/exiting this chapter.
            onChapterEnter: [
                 {
                     layer: 'WolfPoints',
                     opacity: 1
                 },
            ],
            onChapterExit: [
                 {
                     layer: 'hwy93label',
                     opacity: 0
                 }
            ]
        },

    //Chapter 3
        {
              id: 'Wolf-story-chapter-3',
              title: 'Chapter 3:  Highway 93',
              image: 'images/hwy.png',
              description: 'Highway 93 otherwise known as the Icefields Parkway runs from Jasper, Alberta south into the Northwestern United States. This road was built parallel to the continental divide and offers almost 230 kilometers of spectacular mountainous views (Highway 93…, Icefields Parkway). The highway is fully paved with wide shoulders and a maximum speed of 90 km/hr (Tips for…, Banff and Beyond).',

              //Define the location of the
              location: {
                center: { lon: -116.15278, lat: 51.00962 },
                          zoom: 10.44,
                          pitch: 1.50,
                          bearing: -39.14
              },
              //Choose which layers are visible when entering/exiting this chapter.
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
                      layer: "underpass-label",
                      opacity: 0
                   },
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

            //Chapter 4
          {
                id: 'Wolf-story-chapter-4',
                title: 'Chapter 4: Wolf Mortality',
                image: 'images/hwywolf.png',
                //Chart included in the description
                description: 'Unfortunately, as the wolves often travel near the highway, wolves and other wildlife being struck by vehicles is a common occurance (Calgary Herald, 2014).<canvas id="myChart" width="400" height="400"></canvas>',
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

              //Chapter 5
              {

                  id: 'Wolf-story-chapter-5',
                  title: 'Chapter 5: Adaptations',
                  image: 'images/underpass.png',
                  //Hyperlink and embedded video included in the description
                  description: 'Thankfully, some changes have been implemented regarding the safety of wolves in surrounding parks such as Yoho and Banff National Parks. Kootenay has followed suit with the creation of <a href=https://calgaryherald.com/news/kootenay-national-park-gets-funding-to-reduce-wildlife-collisions-on-highway-93-s> animal underpasses </a> in 2013. Similar projects in nearby parks such as Banff National Park have shown promising results, where wildlife vehicle collisions have decreased by 80% since the implementation of these programs (Calgary Herald, 2014).<iframe width="350" height="200" src="https://www.youtube.com/embed/ND0D3bVbM7Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

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
