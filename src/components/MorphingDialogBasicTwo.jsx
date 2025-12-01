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
      {/* Триггер */}
      <MorphingDialogTrigger
        style={{ borderRadius: "12px" }}
        className="border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 flex items-center gap-3"
      >
        <MorphingDialogImage
          src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
          alt={pkg.title}
          className="h-10 w-10 rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <MorphingDialogTitle className="text-sm font-semibold text-gray-900">{pkg.title}</MorphingDialogTitle>
          <MorphingDialogSubtitle className="text-xs text-gray-500">{pkg.price}</MorphingDialogSubtitle>
        </div>
      </MorphingDialogTrigger>

      {/* Контейнер */}
      <MorphingDialogContainer>
        <MorphingDialogContent
          className="relative w-full max-w-lg bg-white rounded-xl shadow-xl border border-gray-100"
          style={{ borderRadius: "16px" }}
        >
          {/* Scrollable */}
          <ScrollArea className="max-h-[80vh] p-6">
            <div className="flex justify-center py-6">
              <MorphingDialogImage
                src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
                alt={pkg.title}
                className="h-auto w-48 rounded-lg"
              />
            </div>

            <div className="mt-4">
              <MorphingDialogTitle className="text-lg font-bold text-gray-900">{pkg.title}</MorphingDialogTitle>
              <MorphingDialogSubtitle className="text-gray-500 mb-4">{pkg.price}</MorphingDialogSubtitle>
              <div className="text-gray-700 text-sm whitespace-pre-line">{pkg.details}</div>
            </div>
          </ScrollArea>

          <MorphingDialogClose className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
