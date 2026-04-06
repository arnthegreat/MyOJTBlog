# How to Add Google Drive Images to Your Blog Posts

## Step 1: Upload Images to Google Drive

1. Go to [Google Drive](https://drive.google.com)
2. Upload your images to a folder
3. Right-click on the image you want to use
4. Click "Share" or "Get link"

## Step 2: Get the Shareable Link

1. In the sharing settings, change the access to **"Anyone with the link"** can view
2. Copy the link - it will look like this:
   ```
   https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing
   ```

## Step 3: Convert to Direct Image Link

Google Drive links need to be converted to direct image links. Replace the link format:

**From:**
```
https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing
```

**To:**
```
https://drive.google.com/uc?export=view&id=FILE_ID_HERE
```

### Example:
If your link is:
```
https://drive.google.com/file/d/1ABC123XYZ456/view?usp=sharing
```

Convert it to:
```
https://drive.google.com/uc?export=view&id=1ABC123XYZ456
```

## Step 4: Add Images to Your Blog Posts

Open `/src/app/data/posts.ts` and add the `images` array to any post:

```typescript
{
  id: 1,
  title: "Week 1",
  date: "January 15, 2026",
  preview: "First day/week of my On-the-Job Training...",
  content: `...`,
  images: [
    "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_1",
    "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_2",
    "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_3"
  ]
}
```

## Full Example

```typescript
export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Week 1",
    date: "January 15, 2026",
    preview: "First day/week of my On-the-Job Training. Nervous but excited to learn and grow.",
    content: `During my first week of OJT, I was assigned to organize the Capstone 1 and Capstone 2 files...`,
    images: [
      "https://drive.google.com/uc?export=view&id=1ABC123XYZ456",
      "https://drive.google.com/uc?export=view&id=1DEF789GHI012"
    ]
  },
  {
    id: 2,
    title: "Week 2",
    date: "January 22, 2026",
    preview: "Learning the importance of proper documentation...",
    content: `One of my main tasks this week...`,
    images: [
      "https://drive.google.com/uc?export=view&id=1JKL345MNO678"
    ]
  },
  // ... rest of your posts
];
```

## Tips

- **Image Size**: Try to keep images under 5MB for faster loading
- **Image Format**: JPG or PNG work best
- **Multiple Images**: You can add as many images as you want to each post
- **Optional**: Images are completely optional - posts without images will work fine
- **Order**: Images will be displayed in a 2-column grid in the order you add them

## How Images Will Appear

- Images are displayed in a beautiful 2-column grid on desktop
- Each image has hover effects with smooth zoom transitions
- On mobile, images stack in a single column
- An image count indicator appears in the post metadata

## Troubleshooting

**If images don't load:**
1. Make sure the link sharing is set to "Anyone with the link"
2. Double-check that you've converted the link to the direct format
3. Verify the FILE_ID is correct in the URL

**Alternative Method:**
If Google Drive doesn't work well, you can also use:
- Imgur (https://imgur.com)
- ImgBB (https://imgbb.com)
- Any other image hosting service that provides direct image URLs
