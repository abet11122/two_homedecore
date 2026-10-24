# Photo shot list

Your own photos are the strongest sign to readers and to AdSense reviewers that a real person runs this site. This list covers the 20 most important posts: what to photograph, from where, and which marker each photo replaces.

## How to add a photo (2 minutes)

1. Make a folder named after the post: `photos-inbox/<post-slug>/`
   (the slug is the post's file name without `.md`, e.g. `photos-inbox/small-entryway-organization-ideas/`).
2. Save the photo with the file name from the tables below — `hero.jpg`, `photo-1.jpg`, `photo-2.jpg` … (JPG, PNG, WebP, TIFF or AVIF; on an iPhone, export as JPG — HEIC isn't supported).
3. Next to it, create a text file with the same name: `photo-1.txt`
   - **Line 1:** alt text (required) — what is in the photo, in plain words, e.g. `Two-tier shoe rack holding six pairs of trainers beside the front door`.
   - **Line 2:** caption (optional) — shown under the photo, e.g. `Six pairs fit; everything else lives in the wardrobe.`
4. Run `npm run photos` (or `npm run photos -- <post-slug>` for one post).
5. Check with `npm run build`, then commit the post, `src/data/article-images.json` and the new files in `public/images/posts/<post-slug>/`.

What the script does for you:

- Rotates the photo upright and **removes all metadata, including GPS location**.
- Saves 480, 960 and 1440 px wide WebP versions (never upscales).
- `photo-N` replaces the marker `<!-- [ADD YOUR PHOTO: …] {file: photo-N} -->` in the post with a finished figure.
- `hero` replaces the post's stock hero image **and** makes the 2:3 Pinterest pin from it.
- Credits the photo to your name once `person.name` is set in `src/site.ts`.
- Moves your originals to `photos-inbox/<slug>/done/`. `photos-inbox/` is not committed, so originals stay on your computer.

## Shooting tips that apply to every photo

- **Daylight, lamps off**, on a bright but not sunny day — or lamps on and curtains closed for evening "cozy" shots. Don't mix the two.
- **Landscape (horizontal) for heroes**, at least 1600 px wide. Leave space around the subject; the pin is cropped from the center.
- **Hold the phone at chest height, level**, so walls and door frames are straight. Use the 1× lens, not the ultra-wide — it bends small rooms.
- **Clear the floor and surfaces** in the frame, except what the photo is about.
- **Before and after from the same spot.** Mark where you stood with tape.
- Leave out faces, house numbers, mail with your address, screens, and anything you wouldn't want strangers to see.
- Real is better than perfect. A slightly lived-in room is more believable than a staged one.

## The 20 posts

### 1. small-apartment-organization-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Your tidiest storage moment: a shelf with matching baskets, or the drop zone by the door | Straight on, chest height, landscape |
| `photo-1` | Main living space before organizing | From the doorway, wide |
| `photo-2` | A narrow gap or above-door shelf you turned into storage | Close, straight on, showing the gap's width |
| `photo-3` | The same space after organizing | Same spot as `photo-1` |

### 2. small-bathroom-organization-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | *(optional — the post already has its own licensed photos)* | — |
| `photo-1` | Counter and open under-sink cabinet before organizing | Standing at the door, slightly above counter height |
| `photo-2` | The same view after organizing | Same spot as `photo-1` |

### 3. small-bedroom-storage-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Bed with a visible under-bed drawer pulled half out | Low, from the foot corner of the bed |
| `photo-1` | Bedroom from the doorway, bed and wardrobe in frame | Doorway, chest height |
| `photo-2` | Inside the wardrobe after reorganizing | Doors open, straight on |

### 4. small-kitchen-organization-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | A clear counter with the kettle, utensil crock and one tray | Straight on from the far side of the kitchen |
| `photo-1` | Counters and open cabinets before organizing | Wide, from the kitchen entrance |
| `photo-2` | Utensil drawer with dividers, pulled open | Directly from above |
| `photo-3` | Same view as `photo-1` after organizing | Same spot |

### 5. small-boys-bedroom-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | *(optional — the post already has its own licensed photos)* | — |
| `photo-1` | The room with its two or three theme items (bedding, print, lamp) — no child in frame | From the doorway or a corner |

### 6. apartment-decor-ideas-budget
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Living room in the evening with only lamps on | From a corner, so two lamps are visible |
| `photo-1` | Living room before any changes (overhead light on) | Same corner as the hero |
| `photo-2` | After the bulb, curtain and rug changes | Same corner again |

### 7. small-entryway-organization-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Hooks, shoe storage and key spot together | Straight on from across the hall |
| `photo-1` | The entry as it is now | Just inside the front door, looking in |
| `photo-2` | Shoe storage open, showing how many pairs it holds | Straight on, close |

### 8. small-home-office-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Your desk corner in daylight, screen off | From the side, so the window light is visible |
| `photo-1` | The corner or alcove before the desk went in | Wide |
| `photo-2` | Desk setup from behind the chair | Standing behind the chair, slightly above |

### 9. studio-apartment-zoning
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | The divider between two zones (bookcase, sofa back or curtain) | From the living zone, looking toward the bed |
| `photo-1` | The studio from the front door, zones visible | Doorway, wide |
| `photo-2` | The layout from a high corner | Stand on a step stool in the corner opposite the door |

### 10. minimalist-living-room-guide
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Sofa, coffee table and one artwork, with plenty of empty wall | Straight on, centered on the sofa |
| `photo-1` | Living room before decluttering | From a corner |
| `photo-2` | Layout from above or a high corner | Step stool, corner |
| `photo-3` | Finished room | Same corner as `photo-1` |

### 11. bathroom-over-toilet-storage-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Finished shelves or cabinet above the toilet, lid down | Straight on, from the doorway |
| `photo-1` | Empty wall above the toilet with a tape measure stretched across | Straight on |
| `photo-2` | Finished over-toilet storage | Slightly to one side, to show depth |

### 12. small-bedroom-makeover-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | The finished room, bed made, lamps on | From the doorway |
| `photo-1` | The room before, from the doorway | Same spot as the hero |
| `photo-2` | Mid-paint, or a close-up of the new wall color with trim | Straight on |

### 13. cozy-small-bedroom-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Bed with throw and cushions, bedside lamp on, evening | Low, from the foot corner |
| `photo-1` | Bedroom in the evening with lamps on, ceiling light off | Doorway |
| `photo-2` | Close-up of the layered textiles | Close, from the side of the bed |

### 14. small-laundry-room-organization-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Machines with the supply shelf above | Straight on |
| `photo-1` | Laundry area as it is, machine door open | From where you stand to load |
| `photo-2` | Drying rack or rail in use | Wide enough to show where it sits |

### 15. diy-floating-shelves
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Your installed shelf, styled, with the wall around it | Straight on, chest height |
| `photo-1` | The wall with the shelf outline taped on | Straight on |
| `photo-2` | Installed shelf, styled | Slightly from the side, to show it "floats" |

### 16. balcony-decor-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Balcony at dusk with string lights on | From inside, through the open door |
| `photo-1` | Balcony as it is now | From the doorway |
| `photo-2` | Rail table or folding seat in use | Close |
| `photo-3` | Finished balcony at dusk | Same spot as `photo-1` |

### 17. entryway-table-decor-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Styled console with lamp on, mirror above | Straight on |
| `photo-1` | The table before styling | Straight on |
| `photo-2` | Styled with one of the three layouts | Same spot as `photo-1` |

### 18. kitchen-open-shelving-styling
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Your open shelves with the counter below | Straight on, slightly below the bottom shelf |
| `photo-1` | Shelves straight on, fully styled | Straight on |
| `photo-2` | Close-up of one shelf of grouped ceramics or glass | Close, at shelf height |

### 19. small-studio-apartment-ideas
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Daybed or sofa with the table nearby, daytime | From the kitchen end of the room |
| `photo-1` | The studio from the front door | Doorway |
| `photo-2` | Layout from a high corner | Step stool, corner |

### 20. cozy-christmas-living-room-ideas (shoot in December)
| File | What to photograph | Angle |
| --- | --- | --- |
| `hero` | Tree and sofa together, evening, lamps and tree lights on | From across the room |
| `photo-1` | The decorated room from the sofa | Sitting on the sofa |
| `photo-2` | Tree close-up showing lights and ornaments | Close, at ornament height |

## Posts that share a hero image

These posts use the same stock hero as at least one other post. A `hero` photo of your own fixes each one — start with the posts in the top 20 above.

- `photo-1508193638397-1c4234db14d8` (10 posts): `elegant-halloween-decor`, `gothic-halloween-decor-ideas-dark-botanical`, `halloween-dessert-table-styling-ideas`, `halloween-dining-room-tablescape-ideas`, `halloween-mantel-decor-ideas`, `halloween-wreath-ideas-front-door-styling`, `haunted-house-decor-ideas-diy-spooky-setup`, `neon-y2k-apocalypse-halloween-party-decor-ideas`, `pink-halloween-decor-ideas-pink-o-ween`, `vintage-halloween-decor-ideas` — these will be noindexed in November, so they're the lowest priority.
- `photo-1555041469-a586c61ea9bc` (5 posts): `modern-boys-bedroom-ideas`, `small-apartment-living-room-ideas`, `small-apartment-organization-ideas`, `small-studio-apartment-ideas`, `teenage-boy-bedroom-ideas`
- `photo-1512389142860-9c449e58a543` (5 posts): `christmas-bedroom-ideas`, `christmas-coffee-table-decor-ideas`, `christmas-entryway-ideas`, `cozy-christmas-living-room-ideas`, `small-space-christmas-decor-ideas`
- `photo-1616594039964-ae9021a400a0` (4 posts): `cozy-small-bedroom-ideas`, `earthy-bedroom-ideas`, `neutral-bedroom-ideas`, `small-bedroom-makeover-ideas`
- `photo-1556909114-f6e7ad7d3136` (4 posts): `christmas-kitchen-decor-ideas`, `kitchen-countertop-decor-ideas`, `small-kitchen-organization-ideas`, `small-pantry-organization-ideas`
- `photo-1552321554-5fefe8c9ef14` (3 posts): `bathroom-over-toilet-storage-ideas`, `small-bathroom-decor-ideas`, `under-sink-bathroom-organization-ideas`
- `photo-1616486338812-3dadae4b4ace` (2 posts): `minimalist-living-room-guide`, `small-bedroom-storage-ideas`
- `photo-1595526114035-0d45ed16cfbf` (2 posts): `halloween-bedroom-decor-ideas`, `non-scary-halloween-decor-toddler-rooms`
- `photo-1507003211169-0a1dd7228f2d` (2 posts): `cozy-winter-home-decor-ideas`, `fall-apartment-decor-ideas`

To find every remaining marker on the site: search the posts folder for `ADD YOUR PHOTO`.
