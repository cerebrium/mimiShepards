import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import PicturePagePreview from './preview-templates/PicturePagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ParentPagePreview from './preview-templates/ParentPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('pictures', PicturePagePreview)
CMS.registerPreviewTemplate('parents', ParentPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
