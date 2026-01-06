flowchart TD
A@{ shape: circle, label: "Mulai" }

B@{ shape: lean-r, label: 
"Input:
hasilUjianJohn = [75, 80, 79, 90]
hasilUjianEd = [66, 77, 88, 99]" }

C@{ shape: rect, label: 
"gabunganHasilUjian = hasilUjianJohn + hasilUjianEd" }

D@{ shape: rect, label: 
"nilaiMinimum = 0
nilaiMaximum = 0
i = 0" }

E@{ shape: diamond, label: 
"i < gabunganHasilUjian.length" }

F@{ shape: diamond, label: 
"gabunganHasilUjian[i] < 70" }

G@{ shape: lean-r, label: 
"nilaiMinimum += gabunganHasilUjian[i]" }

H@{ shape: diamond, label: 
"gabunganHasilUjian[i] > 95" }

I@{ shape: lean-r, label: 
"nilaiMaximum += gabunganHasilUjian[i]" }

J@{ shape: rect, label: "i++" }

K@{ shape: rect, label: 
"total = 0
i = 0" }

L@{ shape: diamond, label: 
"i < gabunganHasilUjian.length" }

M@{ shape: rect, label: 
"total += gabunganHasilUjian[i]" }

N@{ shape: rect, label: "i++" }

O@{ shape: lean-r, label: 
"Output total" }

P@{ shape: rect, label: 
"average = total / gabunganHasilUjian.length" }

Q@{ shape: lean-r, label: 
"Output rata-rata" }

R@{ shape: dbl-circ, label: "Selesai" }

A --> B --> C --> D --> E
E -- true --> F
F -- true --> G --> J
F -- false --> H
H -- true --> I --> J
H -- false --> J
J --> E

E -- false --> K
K --> L
L -- true --> M --> N --> L
L -- false --> O --> P --> Q --> R
