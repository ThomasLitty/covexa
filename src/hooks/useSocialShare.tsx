import { useToast } from '@/components/ui/use-toast';

export interface ShareData {
  url?: string;
  title?: string;
  description?: string;
}

export const useSocialShare = () => {
  const { toast } = useToast();

  const share = async (platform: string, data: ShareData = {}) => {
    const defaultData = {
      url: typeof window !== 'undefined' ? window.location.href : '',
      title: 'Covexa - AI Orchestration Platform for GTM Execution',
      description: 'AI Orchestration Platform for Intelligent GTM Execution - Meet our AI agents ORRA, MIRA, VARA, LIA, LEXA, TORA, and NIRA',
      ...data
    };

    const shareData = {
      url: encodeURIComponent(defaultData.url),
      title: encodeURIComponent(defaultData.title),
      description: encodeURIComponent(defaultData.description)
    };

    const shareLinks = {
      whatsapp: `https://wa.me/?text=${shareData.title}%20${shareData.url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareData.url}`,
      twitter: `https://twitter.com/intent/tweet?text=${shareData.title}&url=${shareData.url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}`,
      email: `mailto:?subject=${shareData.title}&body=${shareData.description}%0A%0A${shareData.url}`
    };

    const link = shareLinks[platform as keyof typeof shareLinks];
    if (link) {
      window.open(link, '_blank', 'width=600,height=400');
      return true;
    }
    return false;
  };

  const copyToClipboard = async (url: string = window.location.href) => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
      return true;
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
      return false;
    }
  };

  const nativeShare = async (data: ShareData = {}) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: data.title || 'Covexa - AI Orchestration Platform for GTM Execution',
          text: data.description || 'AI Orchestration Platform for Intelligent GTM Execution',
          url: data.url || window.location.href,
        });
        return true;
      } catch (error) {
        console.log('Share cancelled or failed');
        return false;
      }
    } else {
      return copyToClipboard(data.url);
    }
  };

  return {
    share,
    copyToClipboard,
    nativeShare,
    isNativeShareSupported: typeof navigator !== 'undefined' && navigator.share !== undefined
  };
};