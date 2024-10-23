export function validarPlantName(value: string | null): boolean {
  return value !== null && value.trim().length >= 3 && /^[A-Za-z\s]+$/.test(value);
}

export function validarPlantSubtitle(value: string | null): boolean {
  return value !== null && value.trim().length >= 3 && /^[A-Za-z\s]+$/.test(value);
}

export function validarPlantType(value: string | null): boolean {
  return value !== null && value.trim().length >= 3 && /^[A-Za-z\s]+$/.test(value);
}

export function validarPrice(value: string | null): boolean {
  return value !== null && !isNaN(parseFloat(value.trim())) && parseFloat(value.trim()) > 0;
}

export function validarDiscount(value: string | null): boolean {
  return value !== null && /^\d+(\.\d+)?$/.test(value.trim()) && parseFloat(value.trim()) >= 0 && parseFloat(value.trim()) < 100;
}

export function validarLabel(indoorChecked: boolean, outdoorChecked: boolean): boolean {
  return indoorChecked || outdoorChecked;
}

export function validarFeatures(value: string | null): boolean {
  return value !== null && value.trim().length > 0 && /^[A-Za-z\s]+$/.test(value);
}

export function validarDescription(value: string | null): boolean {
  return value !== null && value.trim().length > 0;
}
