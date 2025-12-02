import React from "react";
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

export function MorphingDialogBasicTwo({ packageId }) {
  const { t } = useTranslation();
  const pkg = t("packages", { returnObjects: true }).find((p) => p.id === packageId);

  if (!pkg) return null;

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
        className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 relative z-10 cursor-pointer"
      >
        <MorphingDialogImage
          src={pkg.image || "https://via.placeholder.com/100"}
          alt={pkg.title}
          className="h-12 w-12 md:h-14 md:w-14 rounded-lg object-cover"
        />
        <div className="flex flex-col justify-center">
          <MorphingDialogTitle className="text-sm md:text-base font-semibold text-gray-900">
            {pkg.title}
          </MorphingDialogTitle>
          <MorphingDialogSubtitle className="text-xs md:text-sm text-gray-500">
            {pkg.price}
          </MorphingDialogSubtitle>
        </div>
      </MorphingDialogTrigger>

      {/* Контейнер overlay + центрирование */}
      <MorphingDialogContainer className="fixed inset-0 z-[50] flex items-center justify-center bg-black/50 p-4">
        <MorphingDialogContent
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform scale-95 opacity-0 animate-dialog-open"
          style={{ borderRadius: "20px" }}
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
              <MorphingDialogTitle className="text-lg md:text-2xl font-bold text-gray-900">
                {pkg.title}
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className="text-gray-500 mb-4">
                {pkg.price}
              </MorphingDialogSubtitle>
              <div className="text-gray-700 text-sm md:text-base whitespace-pre-line leading-relaxed">
                {pkg.details}
              </div>
            </div>
          </ScrollArea>

          {/* Close button */}
          <MorphingDialogClose className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
            ✕
          </MorphingDialogClose>
        </MorphingDialogContent>
      </MorphingDialogContainer>

      <style jsx global>{`
        /* Плавная анимация открытия диалога */
        @keyframes dialog-open {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-dialog-open {
          animation: dialog-open 0.28s ease-out forwards;
        }
      `}</style>
    </MorphingDialog>
  );
}
