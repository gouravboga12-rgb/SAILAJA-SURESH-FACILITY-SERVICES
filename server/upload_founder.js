const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '../server/.env' });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Path to the generated image
const localImagePath = 'C:/Users/bogag/.gemini/antigravity/brain/aac530a6-16ab-4d66-8050-4f26fe60d16e/professional_businessman_portrait_md_1775822474181.png';
const fileName = 'founder_professional_portrait.png';

async function uploadAndSetFounder() {
  try {
    console.log('Reading local image file...');
    const fileContent = fs.readFileSync(localImagePath);

    console.log('Uploading to Supabase Storage...');
    const { error: uploadError, data } = await supabase.storage
      .from('images')
      .upload(fileName, fileContent, {
        contentType: 'image/png',
        upsert: true
      });

    if (uploadError) throw uploadError;

    console.log('Fetching public URL...');
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(fileName);

    console.log('Updating settings table with URL:', publicUrl);
    const { error: updateError } = await supabase
      .from('settings')
      .upsert({ key: 'founder_image_url', value: publicUrl });

    if (updateError) throw updateError;

    console.log('Successfully updated founder image!');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

uploadAndSetFounder();
