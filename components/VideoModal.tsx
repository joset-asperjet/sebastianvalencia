import { Dialog, DialogContent } from "@/components/ui/dialog"

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] max-h-[90vh] p-0 bg-black border-none">
        <div className="relative w-full aspect-video">
          <video
            className="w-full h-full"
            controls
            autoPlay
            src={videoUrl}
            title={title}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
} 