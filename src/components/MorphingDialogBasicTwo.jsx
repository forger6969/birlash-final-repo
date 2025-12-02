import React, { useContext } from "react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogImage,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "react-i18next";
import { AppContext } from "@/AppContext";

export function MorphingDialogBasicTwo({ packageId }) {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);
  const { isDark } = theme;

  const pkg = t("packages", { returnObjects: true }).find((p) => p.id === packageId);
  if (!pkg) return null;

  // Динамические цвета для темной/светлой темы
  const triggerBg = isDark ? "bg-[#004D57] border-gray-700" : "bg-white border-gray-200";
  const triggerTitleColor = isDark ? "text-gray-100" : "text-gray-900";
  const triggerSubtitleColor = isDark ? "text-gray-400" : "text-gray-500";
  const contentBg = isDark ? "bg-[#004D57] border-gray-700" : "bg-white border-gray-100";
  const contentTitleColor = isDark ? "text-gray-100" : "text-gray-900";
  const contentSubtitleColor = isDark ? "text-gray-400" : "text-gray-500";
  const contentTextColor = isDark ? "text-gray-200" : "text-gray-700";
  const overlayBg = isDark ? "bg-black/70" : "bg-black/50";

  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 30,
      }}
    >
      {/* Триггер-карточка */}
      <MorphingDialogTrigger
        className={`flex items-center gap-4 p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer border ${triggerBg}`}
      >
        <MorphingDialogImage
          src={pkg.image || "https://via.placeholder.com/100"}
          alt={pkg.title}
          className="h-12 w-12 md:h-14 md:w-14 rounded-lg object-cover"
        />
        <div className="flex flex-col justify-center">
          <MorphingDialogTitle className={`text-sm md:text-base font-semibold ${triggerTitleColor}`}>
            {pkg.title}
          </MorphingDialogTitle>
          <MorphingDialogSubtitle className={`text-xs md:text-sm ${triggerSubtitleColor}`}>
            {pkg.price}
          </MorphingDialogSubtitle>
        </div>
      </MorphingDialogTrigger>

      {/* Overlay + контейнер модалки */}
      <MorphingDialogContainer className={`fixed inset-0 z-[300] flex items-center justify-center p-4 ${overlayBg}`}>
        <MorphingDialogContent
          className={`relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transform scale-95 opacity-0 animate-dialog-open border ${contentBg}`}
          style={{ borderRadius: "20px", zIndex: 110 }}
        >
          {/* Scrollable content */}
          <ScrollArea className="max-h-[80vh] p-6">
            <div className="flex justify-center py-6">
              <MorphingDialogImage
                src={pkg.image || "https://via.placeholder.com/300"}
                alt={pkg.title}
                className="h-auto w-48 md:w-60 rounded-lg shadow-md"
              />
            </div>

            <div className="mt-4 text-center">
              <MorphingDialogTitle className={`text-lg md:text-2xl font-bold ${contentTitleColor}`}>
                {pkg.title}
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className={`${contentSubtitleColor} mb-4`}>
                {pkg.price}
              </MorphingDialogSubtitle>
              <div className={`text-sm md:text-base whitespace-pre-line leading-relaxed ${contentTextColor}`}>
                {pkg.details}
              </div>
            </div>
          </ScrollArea>

          {/* Close button */}
          <MorphingDialogClose className={`absolute top-4 right-4 transition-colors cursor-pointer ${isDark ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"}`}>
            ✕
          </MorphingDialogClose>
        </MorphingDialogContent>
      </MorphingDialogContainer>

      {/* Анимация открытия */}
      <style jsx global>{`
        @keyframes dialog-open {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-dialog-open { animation: dialog-open 0.28s ease-out forwards; }
      `}</style>
    </MorphingDialog>
  );
}
