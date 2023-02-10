import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
} from '@mui/material'
import { InfoRounded } from '@mui/icons-material'
import { useState } from 'react'

export interface PhotoGalleryItem {
  img: string
  title?: string
  subtitle?: string
  description?: string
}

export const PhotoGallery = (props: { items: PhotoGalleryItem[] }) => {
  const { items } = props
  const theme = useTheme()
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<PhotoGalleryItem | null>(
    null
  )

  const handleOnInfoClick = (item: PhotoGalleryItem) => {
    setSelectedItem(item)
    setIsInfoOpen(true)
  }

  const handleOnClose = () => {
    setIsInfoOpen(false)
  }

  return (
    <>
      <Dialog open={isInfoOpen} onClose={handleOnClose}>
        {selectedItem?.title && (
          <DialogTitle>
            {selectedItem.title}{' '}
            {selectedItem.subtitle && `- ${selectedItem.subtitle}`}
          </DialogTitle>
        )}
        {selectedItem?.description && (
          <DialogContent>{selectedItem.description}</DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleOnClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <ImageList>
        {items.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                    ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            {(item.title || item.subtitle) && (
              <ImageListItemBar
                title={item.title || null}
                subtitle={item.subtitle || null}
                actionIcon={
                  item.description ? (
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                      // tslint:disable-next-line: jsx-no-lambda
                      onClick={() => handleOnInfoClick(item)}
                    >
                      <InfoRounded />
                    </IconButton>
                  ) : null
                }
                sx={{
                  '& .MuiImageListItemBar-title': {
                    color: theme.colors.alpha.trueWhite[100],
                  },
                  '& .MuiImageListItemBar-subtitle': {
                    color: theme.colors.alpha.trueWhite[70],
                  },
                }}
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}
