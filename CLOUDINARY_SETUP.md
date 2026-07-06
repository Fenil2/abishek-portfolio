# Cloudinary Video Integration Guide

Your video editor portfolio is now configured to display MP4 videos from Cloudinary. Follow these steps to replace the placeholder URLs with your own videos.

## Step 1: Create a Cloudinary Account

1. Go to [https://cloudinary.com](https://cloudinary.com)
2. Sign up for a free account (or login if you already have one)
3. From your Cloudinary dashboard, note your **Cloud Name** (you'll see it in the top-left)

## Step 2: Upload Your Videos

1. In the Cloudinary dashboard, go to **Media Library**
2. Click **Upload** and select your MP4 video files
3. Once uploaded, click on each video to get its **URL**
4. Copy the full video URL (it will look like: `https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/video-name.mp4`)

## Step 3: Update Portfolio Videos

Open `/components/Portfolio.tsx` and replace the `videoUrl` values in the `projects` array:

### Current Structure:
```typescript
const projects = [
  {
    id: 1,
    title: 'Medical Aesthetic Campaign',
    category: 'medical',
    views: '2.5K',
    duration: '0:45',
    description: 'Short-form content for aesthetic clinic',
    videoUrl: 'https://res.cloudinary.com/demo/video/upload/v1634567890/sample1.mp4'
  },
  // ... more projects
];
```

### To Update:
Replace each `videoUrl` with your actual Cloudinary video URL:

```typescript
videoUrl: 'https://res.cloudinary.com/YOUR-CLOUD-NAME/video/upload/v1234567890/your-video-name.mp4'
```

## Step 4: Optimize Your Videos (Optional)

Cloudinary allows you to optimize video delivery by adding parameters to the URL:

### Transform Quality:
```
https://res.cloudinary.com/your-cloud-name/video/upload/q_auto/your-video.mp4
```

### Set Quality & Format:
```
https://res.cloudinary.com/your-cloud-name/video/upload/q_auto,f_mp4/your-video.mp4
```

### Add Compression:
```
https://res.cloudinary.com/your-cloud-name/video/upload/q_auto:good,f_mp4/your-video.mp4
```

## Video Modal Features

The portfolio includes a video player modal with:
- ✅ Full video controls (play, pause, volume, fullscreen)
- ✅ Video title and description display
- ✅ Click to close functionality
- ✅ Smooth animations
- ✅ Responsive design

## Supported Video Formats

- MP4
- WebM
- OGG
- HLS streams
- Any format Cloudinary supports

## Troubleshooting

### Videos Not Playing
- Check your video URL is correct
- Ensure the video file exists in your Cloudinary account
- Check browser console for CORS errors
- Verify the video format is supported

### Poor Video Performance
- Use the quality optimization parameters mentioned above
- Test different compression levels
- Use `q_auto` for automatic quality detection

### Large File Sizes
- Compress videos before uploading
- Use Cloudinary's built-in optimization
- Consider WebM format for better compression

## Example Portfolio Configuration

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Video Title',
    category: 'medical',
    views: '1.2K',
    duration: '1:30',
    description: 'Your video description',
    videoUrl: 'https://res.cloudinary.com/your-cloud-name/video/upload/q_auto,f_mp4/video-id.mp4'
  },
];
```

## Need Help?

- Cloudinary Documentation: [https://cloudinary.com/documentation](https://cloudinary.com/documentation)
- Video Upload Guide: [https://cloudinary.com/documentation/video_upload_api_reference](https://cloudinary.com/documentation/video_upload_api_reference)
- Video Transformation: [https://cloudinary.com/documentation/video_transformations](https://cloudinary.com/documentation/video_transformations)
