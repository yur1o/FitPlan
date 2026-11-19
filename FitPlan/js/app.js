'use strict';
/* ---------- icons ---------- */
const IC = {
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  plans: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  back: '<path d="M15 18l-6-6 6-6"/>',
  chev: '<path d="M9 18l6-6-6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',
  pencil: '<path d="M17 3l4 4L8 20H4v-4z"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  flame: '<path d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-5 3-7 1 2 2 3 3 3 0-3-1-5 0-8z"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  x: '<path d="M18 6L6 18M6 6l12 12"/>',
  dumbbell: '<path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  barbell: '<path d="M2 12h1"/><path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2"/><path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"/><path d="M9 12h6"/><path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"/><path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2"/><path d="M22 12h-1"/>'
};
const ico = (n, s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;

/* ---------- exercise library ---------- */
const EX = {
  curl: { n: 'Bicep Curls', a: 'arms', t: 'w', eq: ['Dumbbells', 'Barbell', 'Cable machine'], d: 'Keep your elbows pinned to your sides. Bend your arm towards your body at the elbow in a curling motion, then lower slowly.', p: ['stand', 'curl'] },
  hammer: { n: 'Hammer Curls', a: 'arms', t: 'w', eq: ['Dumbbells', 'Cable rope'], d: 'Hold the weights with palms facing each other and curl up without swinging your body.', p: ['stand', 'curl'] },
  latraise: { n: 'Lateral Raises', a: 'arms', t: 'w', eq: ['Dumbbells', 'Cable machine', 'Resistance band'], d: 'With a slight bend in the elbows, raise your arms out to the sides until they reach shoulder height. Lower with control.', p: ['stand', 'raise'] },
  ohp: { n: 'Overhead Press', a: 'arms', t: 'w', eq: ['Barbell', 'Dumbbells', 'Machine'], d: 'Start with the weight at shoulder height. Press straight up until your arms are fully extended, then lower back down.', p: ['pressDown', 'pressUp'] },
  wristcurl: { n: 'Wrist Curls', a: 'arms', t: 'w', eq: ['Dumbbells', 'Barbell'], d: 'Rest your forearms on your thighs, palms up, and curl the weight using only your wrists.', p: ['stand', 'curl'] },
  pullup: { n: 'Pull-ups', a: 'back', t: 'w', eq: ['Pull-up bar', 'Assisted machine'], d: 'Hang from the bar with straight arms. Pull your chest up towards the bar, then lower slowly to a full hang.', p: ['hang', 'pullTop'] },
  row: { n: 'Barbell Rows', a: 'back', t: 'w', eq: ['Barbell', 'Dumbbells', 'Cable machine'], d: 'Hinge at the hips with a flat back. Pull the weight to your lower ribs, squeezing your shoulder blades, then lower.', p: ['rowA', 'rowB'] },
  pulldown: { n: 'Lateral Pulldowns', a: 'back', t: 'w', eq: ['Cable machine', 'Resistance band'], d: 'Grip the bar wider than your shoulders and pull it down to your upper chest, keeping your torso tall.', p: ['pressUp', 'pressDown'] },
  superman: { n: 'Supermans', a: 'back', t: 'w', eq: ['None (bodyweight)', 'Mat'], d: 'Lie face down. Lift your arms, chest and legs off the floor at the same time, hold briefly, then lower.', p: ['prone', 'superman'] },
  bench: { n: 'Barbell Bench Press', a: 'chest', t: 'w', eq: ['Barbell', 'Dumbbells', 'Smith machine'], d: 'Lie on the bench and lower the bar to your mid-chest. Press it back up until your arms are straight.', p: ['benchDown', 'benchUp'] },
  pushup: { n: 'Push-ups', a: 'chest', t: 'w', eq: ['None (bodyweight)', 'Push-up handles'], d: 'Keep your body in a straight line. Lower your chest towards the floor, then push back up.', p: ['pushUp', 'pushDown'] },
  fly: { n: 'Chest Flys', a: 'chest', t: 'w', eq: ['Dumbbells', 'Cable machine', 'Pec deck'], d: 'With soft elbows, open your arms wide until you feel a stretch in your chest, then bring them back together.', p: ['flyOpen', 'benchUp'] },
  plank: { n: 'Planks', a: 'core', t: 't', eq: ['None (bodyweight)', 'Mat'], d: 'Rest on your forearms and toes. Keep your body in a straight line from head to heels and hold.', p: ['plank', 'plank2'] },
  crunch: { n: 'Crunches', a: 'core', t: 'w', eq: ['Mat'], d: 'Lie on your back with knees bent. Curl your shoulders off the floor using your abs, then lower slowly.', p: ['lie', 'crunch'] },
  climber: { n: 'Mountain Climbers', a: 'core', t: 'w', eq: ['None (bodyweight)'], d: 'From a high plank, drive one knee towards your chest, then switch legs quickly. Each leg counts as one rep.', p: ['pushUp', 'climb'] },
  twist: { n: 'Russian Twists', a: 'core', t: 'w', eq: ['None (bodyweight)', 'Medicine ball', 'Dumbbell'], d: 'Sit leaning back with feet lifted. Rotate your torso to touch the floor on each side.', p: ['sitL', 'sitR'] },
  squat: { n: 'Squats', a: 'above', t: 'w', eq: ['Barbell', 'Dumbbells', 'None (bodyweight)'], d: 'Feet shoulder-width apart. Push your hips back and bend your knees until your thighs are parallel to the floor, then stand up.', p: ['stand', 'squat'] },
  rdl: { n: 'Romanian Deadlifts', a: 'above', t: 'w', eq: ['Barbell', 'Dumbbells', 'Kettlebell'], d: 'With a slight knee bend, hinge at the hips and slide the weight down your legs, then drive your hips forward to stand.', p: ['stand', 'rowA'] },
  lunge: { n: 'Lunges', a: 'above', t: 'w', eq: ['None (bodyweight)', 'Dumbbells'], d: 'Step forward and lower until both knees are bent about 90°. Push back to standing and switch legs.', p: ['stand', 'lunge'] },
  bridge: { n: 'Glute Bridges', a: 'above', t: 'w', eq: ['Mat', 'Barbell'], d: 'Lie on your back with knees bent. Squeeze your glutes and lift your hips until your body forms a straight line.', p: ['lie', 'bridgeUp'] },
  calf: { n: 'Calf Raises', a: 'below', t: 'w', eq: ['None (bodyweight)', 'Dumbbells', 'Machine'], d: 'Stand tall and rise up onto your toes as high as you can, pause, then lower your heels slowly.', p: ['stand', 'toes'] },
  cycling: { n: 'Cycling', a: 'cycling', t: 'd', eq: ['Road bike', 'Stationary bike'], d: 'Ride at a steady pace you can hold for the whole distance. Keep a smooth pedal stroke.', p: ['cycleA', 'cycleB'] },
  spin: { n: 'Bike Intervals', a: 'cycling', t: 'd', eq: ['Stationary bike', 'Road bike'], d: 'Alternate 1 minute hard with 2 minutes easy for the whole session.', p: ['cycleA', 'cycleB'] },
  burpee: { n: 'Burpees', a: 'fullbody', t: 'w', eq: ['None (bodyweight)'], d: 'Squat down, jump your feet back into a plank, jump them back in, then jump up with your arms overhead.', p: ['squat', 'jump'] },
  jumprope: { n: 'Jump Rope', a: 'fullbody', t: 't', eq: ['Jump rope'], d: 'Stay on the balls of your feet and make small, quick hops while turning the rope with your wrists.', p: ['stand', 'hop'] },
  jacks: { n: 'Jumping Jacks', a: 'fullbody', t: 'w', eq: ['None (bodyweight)'], d: 'Jump your feet out while raising your arms overhead, then jump back to the start.', p: ['stand', 'jack'] },
  run: { n: 'Running', a: 'running', t: 'd', eq: ['Outdoor', 'Treadmill'], d: 'Run at a conversational pace. Land softly under your hips and keep your shoulders relaxed.', p: ['runA', 'runB'] },
  sprint: { n: 'Sprint Intervals', a: 'running', t: 't', eq: ['Track', 'Treadmill'], d: 'Sprint hard for the set time, then walk until you have recovered before the next sprint.', p: ['runA', 'runB'] }
};
// Photos: free-exercise-db (github.com/yuhonas/free-exercise-db), The Unlicense / public domain. Loaded online; falls back to the drawn figure offline.
const IMG_BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';
// photos from other sources: [start, finish] URLs plus credit; split = one image holding both poses side by side
const IMG_EXTRA = {
  burpee: { src: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Burpee_3_Hands_Grounded.jpg/500px-Burpee_3_Hands_Grounded.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Burpee_5_Thrust.jpg/500px-Burpee_5_Thrust.jpg'], credit: 'Taco fleur, Wikimedia Commons (CC BY-SA 4.0)' },
  jacks: { src: ['https://wger.de/media/exercise-images/320/6c9124b6-3551-47a8-9c22-20141c8b9c53.png', 'https://wger.de/media/exercise-images/320/6c9124b6-3551-47a8-9c22-20141c8b9c53.png'], credit: 'wger.de (CC BY-SA 4.0)', split: true }
};
const photo = (id, k) => IMG[id] ? `${IMG_BASE}${IMG[id]}/${k}.jpg` : IMG_EXTRA[id] && IMG_EXTRA[id].src[k];
const photoCredit = id => IMG[id] ? 'free-exercise-db (public domain)' : IMG_EXTRA[id] && IMG_EXTRA[id].credit;
const IMG = { "curl": "Dumbbell_Bicep_Curl", "hammer": "Hammer_Curls", "latraise": "Side_Lateral_Raise", "ohp": "Dumbbell_Shoulder_Press", "wristcurl": "Palms-Up_Dumbbell_Wrist_Curl_Over_A_Bench", "pullup": "Pullups", "row": "Bent_Over_Barbell_Row", "pulldown": "Wide-Grip_Lat_Pulldown", "superman": "Superman", "bench": "Barbell_Bench_Press_-_Medium_Grip", "pushup": "Pushups", "fly": "Dumbbell_Flyes", "plank": "Plank", "crunch": "Crunches", "climber": "Mountain_Climbers", "twist": "Russian_Twist", "squat": "Barbell_Squat", "rdl": "Romanian_Deadlift", "lunge": "Bodyweight_Walking_Lunge", "bridge": "Butt_Lift_Bridge", "calf": "Standing_Calf_Raises", "cycling": "Bicycling", "spin": "Bicycling_Stationary", "jumprope": "Rope_Jumping", "run": "Running_Treadmill", "sprint": "Running_Treadmill" };
const AREA_IMG = { arms: 'Dumbbell_Bicep_Curl', back: 'Bent_Over_Barbell_Row', chest: 'Barbell_Bench_Press_-_Medium_Grip', core: 'Plank', above: 'Barbell_Squat', below: 'Standing_Calf_Raises', cycling: 'Bicycling', fullbody: 'Rope_Jumping', running: 'Running_Treadmill' };
const CATS = {
  upper: { n: 'Upper Body', areas: { arms: 'Arms', back: 'Back', chest: 'Chest', core: 'Core' } },
  lower: { n: 'Lower Body', areas: { above: 'Above the knees', below: 'Below the knees' } },
  cardio: { n: 'Cardio', areas: { cycling: 'Cycling', fullbody: 'Full Body', running: 'Running' } }
};
const catOf = a => Object.keys(CATS).find(c => CATS[c].areas[a]);

/* ---------- figures ---------- */
const STAND = { h: [50, 16], n: [50, 28], p: [50, 62], le: [40, 45], lh: [38, 61], re: [60, 45], rh: [62, 61], lk: [45, 85], lf: [44, 108], rk: [55, 85], rf: [56, 108] };
const shift = (o, dy, keep = []) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, keep.includes(k) ? v : [v[0], v[1] + dy]]));
const lie = { h: [14, 102], n: [22, 104], p: [56, 106], le: [32, 106], lh: [44, 106], re: [33, 107], rh: [45, 107], lk: [72, 90], lf: [84, 108], rk: [73, 91], rf: [86, 108] };
const pushUp = { h: [16, 66], n: [24, 70], p: [60, 80], le: [24, 88], lh: [24, 106], re: [26, 88], rh: [26, 106], lk: [78, 92], lf: [94, 106], rk: [78, 93], rf: [95, 106] };
const benchDown = { h: [14, 72], n: [22, 74], p: [56, 76], le: [18, 86], lh: [24, 64], re: [20, 87], rh: [26, 64], lk: [72, 74], lf: [74, 108], rk: [73, 75], rf: [76, 108], bench: 79 };
const rowA = { h: [26, 40], n: [34, 46], p: [64, 58], le: [34, 64], lh: [34, 80], re: [36, 64], rh: [36, 80], lk: [60, 84], lf: [60, 108], rk: [64, 84], rf: [64, 108] };
const cycleA = { h: [34, 28], n: [40, 40], p: [62, 60], le: [34, 52], lh: [30, 60], re: [36, 52], rh: [32, 60], lk: [48, 72], lf: [54, 96], rk: [58, 80], rf: [64, 104], bike: 1 };
const runA = { h: [48, 16], n: [48, 28], p: [50, 60], le: [40, 42], lh: [36, 30], re: [58, 44], rh: [64, 56], lk: [40, 80], lf: [44, 104], rk: [62, 78], rf: [74, 94] };
const sitL = { h: [40, 62], n: [44, 72], p: [60, 104], le: [36, 82], lh: [28, 86], re: [38, 83], rh: [30, 87], lk: [44, 86], lf: [30, 94], rk: [45, 87], rf: [31, 95] };
const hang = { h: [50, 26], n: [50, 37], p: [50, 68], le: [40, 22], lh: [38, 6], re: [60, 22], rh: [62, 6], lk: [48, 88], lf: [47, 110], rk: [52, 88], rf: [53, 110], bar: 1 };
const POSES = {
  stand: STAND,
  curl: { ...STAND, lh: [37, 33], rh: [63, 33] },
  raise: { ...STAND, le: [33, 30], lh: [18, 29], re: [67, 30], rh: [82, 29] },
  pressDown: { ...STAND, le: [34, 38], lh: [36, 22], re: [66, 38], rh: [64, 22] },
  pressUp: { ...STAND, le: [38, 16], lh: [40, 2], re: [62, 16], rh: [60, 2] },
  hang,
  pullTop: { ...hang, h: [50, 10], n: [50, 21], p: [50, 52], le: [32, 22], re: [68, 22], lk: [48, 74], lf: [46, 96], rk: [52, 74], rf: [54, 96] },
  rowA, rowB: { ...rowA, le: [50, 60], lh: [42, 66], re: [52, 60], rh: [44, 66] },
  squat: { h: [38, 40], n: [42, 52], p: [62, 76], le: [34, 60], lh: [22, 58], re: [36, 62], rh: [24, 60], lk: [42, 86], lf: [56, 108], rk: [44, 88], rf: [60, 108] },
  lunge: { h: [50, 32], n: [50, 44], p: [50, 74], le: [44, 58], lh: [44, 72], re: [56, 58], rh: [56, 72], lk: [32, 82], lf: [30, 108], rk: [66, 98], rf: [80, 106] },
  pushUp, pushDown: { ...pushUp, h: [16, 88], n: [24, 92], p: [60, 96], le: [36, 90], re: [38, 91], lk: [78, 100], rk: [78, 101] },
  plank: { ...pushUp, h: [16, 84], n: [24, 88], p: [60, 92], le: [24, 106], lh: [38, 106], re: [26, 106], rh: [40, 106], lk: [78, 98], rk: [78, 99] },
  plank2: { ...pushUp, h: [16, 84], n: [24, 88], p: [60, 89], le: [24, 106], lh: [38, 106], re: [26, 106], rh: [40, 106], lk: [78, 97], rk: [78, 98] },
  climb: { ...pushUp, lk: [44, 88], lf: [50, 104] },
  lie, bridgeUp: { ...lie, h: [16, 104], n: [24, 104], p: [56, 86], lk: [74, 84], rk: [75, 85] },
  crunch: { ...lie, h: [30, 88], n: [34, 96], le: [26, 86], lh: [30, 82], re: [28, 87], rh: [32, 83] },
  prone: { h: [18, 102], n: [26, 105], p: [60, 106], le: [14, 106], lh: [4, 106], re: [15, 107], rh: [5, 107], lk: [78, 107], lf: [96, 107], rk: [78, 108], rf: [96, 108] },
  superman: { h: [20, 96], n: [28, 101], p: [60, 106], le: [16, 94], lh: [6, 88], re: [17, 95], rh: [7, 89], lk: [78, 103], lf: [95, 96], rk: [78, 104], rf: [95, 97] },
  benchDown, benchUp: { ...benchDown, le: [24, 62], lh: [24, 48], re: [26, 62], rh: [26, 48] },
  flyOpen: { ...benchDown, le: [12, 70], lh: [4, 78], re: [36, 70], rh: [44, 78] },
  sitL, sitR: { ...sitL, le: [52, 84], lh: [60, 88], re: [54, 85], rh: [62, 89] },
  tuck: { ...STAND, h: [46, 17] }, tiltL: { ...STAND, h: [44, 18] }, tiltR: { ...STAND, h: [56, 18] },
  toes: shift(STAND, -3), heels: { ...STAND, lf: [42, 106], rf: [58, 106] },
  cycleA, cycleB: { ...cycleA, lk: [56, 80], lf: [62, 104], rk: [50, 72], rf: [56, 96] },
  runA, runB: { ...runA, le: [58, 42], lh: [64, 30], re: [40, 44], rh: [36, 56], lk: [60, 80], lf: [56, 104], rk: [38, 78], rf: [28, 94] },
  jump: { h: [50, 8], n: [50, 20], p: [50, 54], le: [42, 10], lh: [40, -2], re: [58, 10], rh: [60, -2], lk: [46, 78], lf: [44, 100], rk: [54, 78], rf: [56, 100] },
  hop: { ...shift(STAND, -5), lh: [30, 57], rh: [70, 57] },
  jack: { ...STAND, le: [36, 14], lh: [30, 2], re: [64, 14], rh: [70, 2], lk: [38, 84], lf: [30, 108], rk: [62, 84], rf: [70, 108] }
};
function figure(name, label) {
  const p = POSES[name], skin = '#e8b48a', shirt = '#2563eb', shorts = '#f59e0b';
  const L = (a, b, c, w) => `<line x1="${p[a][0]}" y1="${p[a][1]}" x2="${p[b][0]}" y2="${p[b][1]}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
  let s = `<svg viewBox="0 -6 100 120" class="fig" role="img" aria-label="${esc(label || 'Exercise figure')}"><line x1="0" y1="111" x2="100" y2="111" stroke="#d1d5db" stroke-width="2"/>`;
  if (p.bench) s += `<rect x="6" y="${p.bench}" width="70" height="6" rx="2" fill="#9ca3af"/><rect x="38" y="${p.bench + 6}" width="5" height="${111 - p.bench - 6}" fill="#9ca3af"/>`;
  if (p.bar) s += `<line x1="18" y1="5" x2="82" y2="5" stroke="#6b7280" stroke-width="3" stroke-linecap="round"/>`;
  if (p.bike) s += `<g fill="none" stroke="#6b7280" stroke-width="3"><circle cx="22" cy="96" r="14"/><circle cx="82" cy="96" r="14"/><path d="M22 96L42 66H66L82 96M62 60L58 98L42 66M42 66L30 56"/></g>`;
  s += L('n', 're', skin, 6) + L('re', 'rh', skin, 5) + L('p', 'rk', shorts, 8) + L('rk', 'rf', skin, 6) + L('n', 'p', shirt, 13) + L('p', 'lk', shorts, 8) + L('lk', 'lf', skin, 6) + L('n', 'le', skin, 6) + L('le', 'lh', skin, 5);
  return s + `<circle cx="${p.h[0]}" cy="${p.h[1]}" r="8" fill="${skin}"/></svg>`;
}
function body(area) {
  const c = k => (k === area || area === 'fullbody' || (area === 'back' && (k === 'chest' || k === 'core'))) ? '#dc2626' : '#1f2937';
  return `<svg viewBox="0 0 100 120" aria-hidden="true"><circle cx="50" cy="13" r="9" fill="${c('head')}"/><rect x="46" y="21" width="8" height="7" fill="${c('neck')}"/><path d="M34 28h32l-2 20H36z" fill="${c('chest')}"/><path d="M36 49h28l-2 20H38z" fill="${c('core')}"/><path d="M24 30l9-2 2 20-4 20h-6l1-20z" fill="${c('arms')}"/><path d="M76 30l-9-2-2 20 4 20h6l-1-20z" fill="${c('arms')}"/><path d="M38 70h11l-1 24h-9z" fill="${c('above')}"/><path d="M51 70h11l-1 24h-9z" fill="${c('above')}"/><path d="M39 95h9l-1 22h-7z" fill="${c('below')}"/><path d="M52 95h9l-1 22h-7z" fill="${c('below')}"/></svg>`;
}

/* ---------- state ---------- */
const KEY = 'fitplan-hifi-v1';
const fresh = () => ({ onboarded: false, user: null, plan: null, logs: [], draft: null, notif: true });
let S;
try { S = JSON.parse(localStorage.getItem(KEY)) || fresh() } catch (e) { S = fresh() }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)) } catch (e) { } }
// each main tab is its own HTML page; sub-screens (log, edit, onboarding…) render inside the current page
const FILE = { today: 'index.html', schedule: 'schedule.html', plans: 'plans.html', progress: 'progress.html', ex: 'exercises.html' };
const PAGE = document.body.dataset.page || 'today';
const U = { tab: S.onboarded ? PAGE : 'welcome', prev: 'today', editPrev: 'plans', sel: null, week: 0, mon: 0, view: 'week', bp: null, ex: [], q: '', edit: null, pick: false, pq: '', ob: null, modal: null };

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad = n => String(n).padStart(2, '0');
const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d) };
const addD = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return iso(d) };
const today = () => iso(new Date());
const diff = (a, b) => Math.round((parse(b) - parse(a)) / 864e5);
const fmt = (s, o = { weekday: 'long', month: 'long', day: 'numeric' }) => parse(s).toLocaleDateString('en-US', o);
const unit = () => S.unit || (S.user && S.user.unit) || 'kg';
// switch units and convert every stored weight so nothing changes meaning
function setUnit(u) {
  if (u === unit()) return;
  const f = u === 'lbs' ? 2.2046 : 1 / 2.2046, min = u === 'lbs' ? 5 : 2.5;
  const rec = w => w ? Math.max(min, Math.round(w * f / min) * min) : 0; // plan targets snap to plate steps
  const ws = P => P && Object.values(P.workouts).forEach(w => w.ex.forEach(e => { if (EX[e.id].t === 'w') e.w = rec(e.w) }));
  ws(S.plan); ws(U.bp);
  S.logs.forEach(l => { l.entries.forEach(e => { if (EX[e.id].t === 'w') e.sets.forEach(x => x.w *= f) }); l.vol = volume(l.entries); l.pbs = (l.pbs || []).map(x => x.replace(/([\d.]+) (kg|lbs)$/, (m, n) => `${r1(n * f)} ${u}`)) });
  if (S.draft) S.draft.entries.forEach(e => { if (EX[e.id].t === 'w') e.sets.forEach(x => { if (x.w !== '') x.w = String(r1(Number(x.w) * f)) }) });
  if (S.user) { S.user.weight = Math.round(S.user.weight * f); S.user.unit = u }
  S.unit = u; save();
}
const r1 = x => Math.round(x * 10) / 10;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;

const GOALS = [['lose', 'Lose weight'], ['muscle', 'Build muscles'], ['endurance', 'Gain endurance (running, cycling)'], ['active', 'Just staying active']];
const FREQ = [['never', 'Never'], ['1-2', '1–2 days per week'], ['3-4', '3–4 days per week'], ['5+', '5+ days per week']];
const GENDERS = ['Male', 'Female', 'Other / non-binary', 'Prefer not to say'];
const PATTERN = { never: [0, 3], '1-2': [0, 3], '3-4': [0, 2, 4], '5+': [0, 1, 2, 4, 5] };
// workout days (offsets from the start day) when the user picks how many workouts per week
const PER_WEEK = { 2: [0, 3], 3: [0, 2, 4], 4: [0, 1, 3, 5], 5: [0, 1, 2, 4, 5], 6: [0, 1, 2, 3, 4, 5] };
const TPL = {
  upper: { n: 'Upper Body', ex: [['bench', 3, 10, 40], ['row', 3, 10, 35], ['pullup', 2, 5, 0], ['pulldown', 3, 10, 35], ['curl', 3, 12, 10]] },
  lower: { n: 'Lower Body', ex: [['squat', 3, 10, 50], ['rdl', 3, 10, 40], ['lunge', 3, 10, 0], ['calf', 3, 15, 0]] },
  core: { n: 'Core', ex: [['plank', 2, 60, 0], ['bridge', 2, 10, 0], ['climber', 3, 20, 0], ['crunch', 3, 15, 0]] },
  cardio: { n: 'Cardio', ex: [['run', 1, 5, 30], ['cycling', 1, 15, 40], ['jumprope', 3, 60, 0]] },
  full: { n: 'Full Body', ex: [['burpee', 3, 10, 0], ['pushup', 3, 12, 0], ['squat', 3, 12, 0], ['row', 3, 10, 25], ['plank', 1, 45, 0]] }
};
const GOALMAP = { lose: ['cardio', 'full'], muscle: ['upper', 'lower', 'core'], endurance: ['cardio', 'lower'], active: ['full', 'core'] };

function makeEx(id, sets, reps, w, sc = 1, u = 'kg') {
  if (EX[id].t === 'w' && w) { w *= sc; w = u === 'lbs' ? Math.max(5, Math.round(w * 2.2046 / 5) * 5) : Math.max(2.5, Math.round(w / 2.5) * 2.5) }
  return { id, sets, reps, w };
}
function buildWorkout(k, sc, u) { return { id: k, name: TPL[k].n, ex: TPL[k].ex.map(([id, s, r, w]) => makeEx(id, s, r, w, sc, u)) } }
function generatePlan(o) {
  const rot = [...new Set(o.goals.flatMap(g => GOALMAP[g]))];
  const kg = o.unit === 'kg' ? Number(o.weight) : Number(o.weight) / 2.2046;
  const sc = clamp(kg / 75, .7, 1.3) * ({ never: .6, '1-2': .8, '3-4': 1, '5+': 1.1 }[o.freq]);
  const workouts = {}; rot.forEach(k => workouts[k] = buildWorkout(k, sc, o.unit));
  const name = o.goals.map(g => GOALS.find(x => x[0] === g)[1].replace(/ \(.*\)/, '')).join(' + ');
  return { name, start: today(), pattern: PATTERN[o.freq], rotation: rot, workouts };
}
function workoutFor(s) {
  const P = S.plan; if (!P) return null;
  const d = diff(P.start, s); if (d < 0) return null;
  if (P.days) { const id = P.days[parse(s).getDay()]; return id && P.workouts[id] || null }
  if (!P.rotation.length) return null;
  const i = P.pattern.indexOf(d % 7); if (i < 0) return null;
  const n = Math.floor(d / 7) * P.pattern.length + i;
  return P.workouts[P.rotation[n % P.rotation.length]];
}
const perWeek = P => P.days ? Object.keys(P.days).length : P.pattern.length;
const wIds = P => Object.keys(P.workouts);
const curW = () => { const P = U.editSrc === 'bp' ? U.bp : S.plan; return P && P.workouts[U.edit] };
const logFor = s => S.logs.find(l => l.date === s);
function exLine(e) {
  const t = EX[e.id].t;
  if (t === 't') return `${e.sets} × ${e.reps} s`;
  if (t === 'd') return `${e.reps} km · ${e.w} min`;
  return `${e.sets} × ${e.reps}` + (e.w ? ` @ ${e.w} ${unit()}` : ' · bodyweight');
}
const metric = e => EX[e.id].t === 'w' ? Math.max(...e.sets.map(s => s.w)) : Math.max(...e.sets.map(s => s.r));
const pbFmt = (id, m) => EX[id].t === 'w' ? `${r1(m)} ${unit()}` : EX[id].t === 't' ? `${m} s` : `${m} km`;
const volume = entries => entries.reduce((a, e) => a + (EX[e.id].t === 'w' ? e.sets.reduce((b, s) => b + s.r * s.w, 0) : 0), 0);
function streak() {
  if (!S.plan) return 0; let n = 0, d = today();
  for (let k = 0; k < 400 && diff(S.plan.start, d) >= 0; k++, d = addD(d, -1)) {
    if (!workoutFor(d)) continue;
    if (logFor(d)) n++; else if (d !== today()) break;
  }
  return n;
}
function nextWorkout(from) { for (let i = 1; i < 15; i++) { const d = addD(from, i), w = workoutFor(d); if (w) return { d, w } } return null }

/* ---------- shell ---------- */
const actionbar = (inner, hint = '') => `<div class="actionbar">${hint}<div class="actionbar-in">${inner}</div></div>`;
function renderModal() {
  const M = U.modal;
  $('#settings').hidden = M !== 'settings'; $('#confirm').hidden = !M || M === 'settings';
  if (M === 'settings') {
    const u = S.user;
    $('#set-profile').textContent = u ? `${u.gender} · starting weight ${u.weight} ${u.unit}` : 'No profile yet. Answer the questionnaire to create one.';
    document.querySelectorAll('[data-a=unit]').forEach(b => b.setAttribute('aria-pressed', b.dataset.u === unit()));
    $('#set-notif').setAttribute('aria-pressed', S.notif)
  }
  else if (M) { $('#cf-title').textContent = M.title; $('#cf-msg').textContent = M.msg; const ok = $('#cf-ok'); ok.textContent = M.okLabel; ok.classList.toggle('danger', !!M.danger) }
}
let toastT;
function toast(msg, sub = '', pb = '') {
  const t = $('#toast'); t.innerHTML = `${esc(msg)}${sub ? `<span class="ts">${esc(sub)}</span>` : ''}${pb ? `<span class="pbb">🏆 ${esc(pb)}</span>` : ''}`;
  t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), pb ? 4200 : 2800);
}
function ask(title, msg, okLabel, fn, danger = true) { U.modal = { title, msg, okLabel, fn, danger }; render() }

/* ---------- views ---------- */
function obOk(s) {
  const o = U.ob;
  return s === 1 ? !!o.gender : s === 2 ? Number(o.weight) > 0 : s === 3 ? !!o.freq : s === 4 ? o.goals.length > 0 : true;
}
function obMeta() {
  const b = $('#obnext'); if (b) b.disabled = !obOk(U.ob.step);
}
function renderOb() {
  const o = U.ob, s = o.step;
  document.querySelectorAll('#ob .steps i').forEach((x, k) => x.classList.toggle('on', k < s));
  $('#ob-eyebrow').textContent = s <= 4 ? `Question ${s}/4` : 'Review';
  document.querySelectorAll('#ob [data-step]').forEach(x => x.hidden = +x.dataset.step !== s);
  $('#obnext').hidden = s === 5; $('#obcreate').hidden = s !== 5; $('#obnext').disabled = !obOk(s);
  $('#g').value = o.gender; $('#fq').value = o.freq; $('#wt').value = o.weight; $('#wt-unit').textContent = o.unit;
  document.querySelectorAll('[data-a=ob-unit]').forEach(b => b.setAttribute('aria-pressed', b.dataset.u === o.unit));
  document.querySelectorAll('[data-in=ob-goal]').forEach(c => { c.checked = o.goals.includes(c.value); c.closest('.goal').classList.toggle('on', c.checked) });
  if (s === 5) {
    $('#rv-gender').textContent = o.gender; $('#rv-weight').textContent = `${o.weight} ${o.unit}`;
    $('#rv-freq').textContent = FREQ.find(f => f[0] === o.freq)[1]; $('#rv-goals').textContent = o.goals.map(g => GOALS.find(x => x[0] === g)[1]).join(', ')
  }
}
function renderReady() {
  const P = S.plan, days = [...Array(7)].map((_, i) => addD(P.start, i));
  $('#ready-sub').textContent = `${P.name} · ${P.pattern.length} workouts per week, starting today.`;
  document.querySelectorAll('[data-a=perweek]').forEach(b => b.setAttribute('aria-pressed', +b.dataset.n === P.pattern.length));
  $('#ready-week').innerHTML = days.map(d => { const w = workoutFor(d); return `<li><span class="n">${fmt(d, { weekday: 'short', month: 'short', day: 'numeric' })}${d === today() ? ' <span class="pill">Today</span>' : ''}</span><span class="d" style="color:${w ? 'var(--blue)' : 'var(--gray)'};font-weight:600">${w ? esc(w.name) : 'Rest day'}</span></li>` }).join('');
  $('#ready-workouts').innerHTML = P.rotation.map(k => wCard(P.workouts[k], false)).join('');
}
function wCard(w, tools = true) {
  const more = w.ex.length > 5 ? `<li class="muted">+ ${w.ex.length - 5} more…</li>` : '';
  return `<div class="card" style="margin:0"><div class="exhead"><h3>${esc(w.name)}</h3>${tools ? `<div style="display:flex;margin:-8px -8px 0 0"><button class="icon-btn" data-a="edit" data-id="${w.id}" aria-label="Edit ${esc(w.name)} workout" title="Edit">${ico('pencil', 19)}</button><button class="icon-btn danger" data-a="del-w" data-id="${w.id}" aria-label="Delete ${esc(w.name)} workout" title="Delete">${ico('trash', 19)}</button></div>` : ''}</div>
  <ul class="exlist">${w.ex.slice(0, 5).map(e => `<li><span class="n">${EX[e.id].n}</span><span class="d">${exLine(e)}</span></li>`).join('')}${more}</ul></div>`;
}
function bpBegin() { U.bp = { name: '', workouts: {}, days: {} }; U.bpPrev = U.tab; go('build') }
function editTouched() { if (U.editSrc !== 'bp') dropDraft(U.edit); save() }
function bpErr() {
  const B = U.bp, ws = Object.values(B.workouts);
  if (!B.name.trim()) return 'Give your plan a name';
  if (!ws.length) return 'Add at least one workout';
  const u = ws.find(w => !w.name.trim()); if (u) return 'Give every workout a name';
  const e = ws.find(w => !w.ex.length); if (e) return `Add exercises to ${e.name}`;
  if (!Object.keys(B.days).length) return 'Pick at least one workout day';
  return '';
}
function bpMeta() { const m = bpErr(), b = $('#bpsave'); if (b) { b.disabled = !!m; $('#bphint').textContent = m; $('#bphint').hidden = !m } }
const WD = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function vBuild() {
  const B = U.bp; if (!B) return '';
  const ws = Object.values(B.workouts), m = bpErr();
  const wrows = ws.map(w => `<div class="bpw"><div class="edrow"><div class="field"><label class="lbl" for="wn-${w.id}">Workout name</label><input id="wn-${w.id}" class="inp" data-in="bp-wname" data-id="${w.id}" value="${esc(w.name)}" placeholder="e.g. Push Day" maxlength="30"></div>
    <button class="icon-btn danger" style="margin-top:26px" data-a="bp-wdel" data-id="${w.id}" aria-label="Delete ${esc(w.name)}" title="Delete">${ico('trash', 19)}</button></div>
    <ul class="exlist">${w.ex.map(e => `<li><span class="n">${EX[e.id].n}</span><span class="d">${exLine(e)}</span></li>`).join('') || '<li class="muted">No exercises yet</li>'}</ul>
    <button class="btn ghost sm" style="margin-top:8px" data-a="bp-wedit" data-id="${w.id}">${ico(w.ex.length ? 'pencil' : 'plus', 16)} ${w.ex.length ? 'Edit exercises' : 'Add exercises'}</button></div>`).join('');
  const days = [1, 2, 3, 4, 5, 6, 0].map(k => `<div class="bpday ${B.days[k] ? 'on' : ''}"><label class="lbl" for="bd${k}">${WD[k]}</label><select id="bd${k}" class="inp" data-in="bp-day" data-d="${k}"><option value="">Rest day</option>${ws.map(w => `<option value="${w.id}" ${B.days[k] === w.id ? 'selected' : ''}>${esc(w.name || 'Untitled')}</option>`).join('')}</select></div>`).join('');
  return `<div class="sub-head"><button class="back" data-a="bp-cancel">${ico('back', 20)} Cancel</button></div>
  <h1>${B.editing ? 'Edit your plan' : 'Create your own plan'}</h1><p class="muted">Name your plan, build your workouts, then choose which days you train.</p>
  <div class="card" style="margin-top:16px"><div class="field"><label class="lbl" for="bpn"><span class="pill">1</span> Plan name</label><input id="bpn" class="inp" data-in="bp-name" value="${esc(B.name)}" placeholder="e.g. My Strength Week" maxlength="40"></div></div>
  <div class="card"><h2><span class="pill">2</span> Workouts</h2><div class="stack">${wrows}</div>
  <button class="btn ghost wide" style="margin-top:14px" data-a="bp-wadd">${ico('plus', 20)} Add workout</button></div>
  <div class="card"><h2><span class="pill">3</span> Weekly schedule</h2><p class="muted small">Choose a workout for each day, or leave it as a rest day.${ws.length ? '' : ' Add a workout first.'}</p><div class="bpdays">${days}</div></div>
  ${actionbar(`<button class="btn" id="bpsave" data-a="bp-save" ${m ? 'disabled' : ''}>${ico('check', 20)} Save plan</button>`, `<div class="hint small muted" id="bphint" ${m ? '' : 'hidden'}>${m}</div>`)}`;
}
function noPlan(msg) {
  return `<div class="card empty">${ico('plans', 44)}<h2 style="margin-top:10px">No workout plan yet</h2><p class="muted">${msg}</p><div class="row" style="margin-top:8px"><button class="btn" data-a="ob-start">Get a plan for me</button><button class="btn ghost" data-a="bp-start">${ico('pencil', 18)} Create my own</button></div></div>`;
}
function fillToday() {
  const t = today(), w = workoutFor(t), lg = logFor(t);
  let main = '', bar = '';
  if (!S.plan) main = noPlan('Answer 4 quick questions and we\'ll build a weekly plan around your goals.');
  else if (lg) {
    main = `<div class="card state-done"><div class="exhead"><div><span class="pill green">${ico('check', 14)} Completed</span><h2 style="margin:8px 0 0">${esc(lg.name)}</h2></div></div>
    <p class="muted" style="margin-top:6px">${plural(lg.entries.length, 'exercise')} logged${lg.pbs && lg.pbs.length ? ` · <b style="color:#a16207">🏆 ${esc(lg.pbs.join(', '))}</b>` : ''}</p>
    <div class="detail-actions"><button class="btn ghost sm" data-a="start" data-d="${t}">${ico('pencil', 16)} Update log</button></div></div>`;
  } else if (w) {
    const resume = S.draft && S.draft.date === t && S.draft.wid === w.id;
    main = `<div class="card state-todo"><div class="exhead"><div><span class="pill">${resume ? 'In progress' : 'Today\'s workout'}</span><h2 style="margin:8px 0 0">${esc(w.name)}</h2></div><button class="btn ghost sm" data-a="edit" data-id="${w.id}">${ico('pencil', 16)} Edit workout</button></div>
    <ul class="exlist">${w.ex.map(e => `<li><span class="n">${EX[e.id].n}</span><span class="d">${exLine(e)}</span></li>`).join('')}</ul></div>`;
    bar = actionbar(`<button class="btn" data-a="start" data-d="${t}">${ico(resume ? 'back' : 'dumbbell', 20)} ${resume ? 'Resume Workout' : 'Start Workout'}</button>`);
  } else {
    const nx = nextWorkout(t);
    main = `<div class="card state-rest"><span class="pill gray">${ico('moon', 14)} Rest day</span><h2 style="margin:8px 0 4px">Recover and recharge</h2><p class="muted">No workout scheduled today.${nx ? ` Next up: <b>${esc(nx.w.name)}</b> on ${fmt(nx.d, { weekday: 'long' })}.` : ''}</p></div>`;
  }
  $('#today-date').textContent = fmt(t); $('#today-main').innerHTML = main; $('#today-bar').innerHTML = bar;
  $('#tile-schedule').innerHTML = S.plan ? [1, 2, 3].map(i => { const d = addD(t, i), x = workoutFor(d); return `${fmt(d, { weekday: 'short' })} ${parse(d).getDate()}: ${x ? `<b>${esc(x.name)}</b>` : 'Rest'}` }).join('<br>') : 'No plan yet';
  $('#tile-plans').innerHTML = S.plan ? `${esc(S.plan.name)}<br>${plural(wIds(S.plan).length, 'workout')}, ${plural(perWeek(S.plan), 'day')} a week` : 'See all your workouts with all their exercises.';
  $('#tile-progress').innerHTML = `Workouts done: <b>${S.logs.length}</b><br>Current streak: <b>${plural(streak(), 'workout')}</b>`;
}
function fillSchedule() {
  const has = !!S.plan; $('#cal-controls').hidden = !has; $('#cal-legend').hidden = !has;
  if (!has) { $('#plan-name').textContent = ''; $('#cal-grid').innerHTML = noPlan('Once you have a plan, your workouts appear here on a weekly calendar.'); $('#day-detail').innerHTML = ''; return }
  const t = today(), M = U.view === 'month';
  let days, mi = null, sel, label, heading;
  if (M) {
    const f = parse(t); f.setDate(1); f.setMonth(f.getMonth() + U.mon); mi = f.getMonth();
    days = [...Array(42)].map((_, i) => addD(iso(f), i - f.getDay()));
    if (parse(days[35]).getMonth() !== mi) days = days.slice(0, 35);
    sel = U.sel && days.includes(U.sel) ? U.sel : (parse(t).getMonth() === mi && days.includes(t) ? t : iso(f));
    label = heading = f.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  } else {
    const base = addD(t, -parse(t).getDay() + U.week * 7); days = [...Array(7)].map((_, i) => addD(base, i));
    sel = U.sel && days.includes(U.sel) ? U.sel : (days.includes(t) ? t : days[0]);
    label = `${fmt(days[0], { month: 'short', day: 'numeric' })} – ${fmt(days[6], { month: 'short', day: 'numeric' })}`;
    heading = fmt(days[3], { month: 'long', year: 'numeric' });
  }
  const cells = days.map(d => {
    const w = workoutFor(d), lg = logFor(d), before = diff(S.plan.start, d) < 0, out = M && parse(d).getMonth() !== mi;
    const cls = ['day', M && 'm', out && 'out', d === t && 'today', lg ? 'done' : (!w && !before ? 'rest' : ''), before && !lg && 'none', d === sel && 'sel'].filter(Boolean).join(' ');
    const lbl = lg ? lg.name : w ? w.name : before ? (M ? '' : '—') : 'Rest day';
    return `<button class="${cls}" data-a="day" data-d="${d}" aria-pressed="${d === sel}" aria-label="${fmt(d)}: ${esc(lbl || 'no plan yet')}${lg ? ', completed' : ''}${d === t ? ', today' : ''}">
    ${M ? '' : `<span class="dn">${fmt(d, { weekday: 'short' })}</span>`}<span class="dd">${parse(d).getDate()}</span><span class="dl">${esc(lbl)}</span><span class="dot"></span>${lg ? `<span class="ck">${ico('check', 16)}</span>` : ''}</button>`;
  }).join('');
  const off = M ? U.mon : U.week, unitW = M ? 'month' : 'week';
  $('#plan-name').textContent = S.plan.name; $('#cal-label').textContent = label;
  document.querySelectorAll('[data-a=view]').forEach(b => b.setAttribute('aria-pressed', (b.dataset.v === 'month') === M));
  $('#cal-prev').setAttribute('aria-label', 'Previous ' + unitW); $('#cal-next').setAttribute('aria-label', 'Next ' + unitW);
  const r = $('#cal-reset'); r.hidden = !off; r.textContent = 'This ' + unitW;
  $('#cal-grid').innerHTML = (M ? `<div class="week mhead" aria-hidden="true">${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(x => `<span>${x}</span>`).join('')}</div>` : `<h2>${heading}</h2>`) + `<div class="week">${cells}</div>`;
  $('#day-detail').innerHTML = dayDetail(sel);
}
function dayDetail(d) {
  const w = workoutFor(d), lg = logFor(d), t = today(), future = d > t;
  const h = `<h2 style="margin:0">${fmt(d)}${d === t ? ' <span class="pill">Today</span>' : ''}</h2>`;
  if (lg) {
    const resumeOK = w && lg.wid === w.id;
    return `<div class="card state-done">${h}<p style="margin:6px 0 0"><span class="pill green">${ico('check', 14)} Completed</span> <b>${esc(lg.name)}</b></p>
    <div class="excards">${lg.entries.map(e => `<div class="excard"><div class="n">${EX[e.id].n}</div><div class="d">${e.sets.map(s => EX[e.id].t === 'w' ? `${s.r}${s.w ? `×${r1(s.w)}` : ''}` : EX[e.id].t === 't' ? `${s.r}s` : `${s.r}km/${s.w}min`).join(', ')}</div></div>`).join('')}</div>
    ${resumeOK ? `<div class="detail-actions"><button class="btn ghost sm" data-a="start" data-d="${d}">${ico('pencil', 16)} Update log</button></div>` : ''}</div>`;
  }
  if (!w) return `<div class="card state-rest">${h}<p style="margin:8px 0 0"><span class="pill gray">${ico('moon', 14)} Rest day</span> <span class="muted">No workout scheduled. Take it easy!</span></p></div>`;
  const resume = S.draft && S.draft.date === d && S.draft.wid === w.id;
  return `<div class="card state-todo">${h}<p style="margin:6px 0 0"><b style="font-size:17px">${esc(w.name)}</b> <span class="muted">· ${plural(w.ex.length, 'exercise')}</span></p>
  <div class="excards">${w.ex.map(e => `<div class="excard"><div class="n">${EX[e.id].n}</div><div class="d">${exLine(e)}</div></div>`).join('')}</div>
  <div class="detail-actions">${future ? `<button class="btn" disabled>Upcoming</button>` : `<button class="btn" data-a="start" data-d="${d}">${ico('dumbbell', 20)} ${resume ? 'Resume Workout' : d === t ? 'Start Workout' : 'Log this workout'}</button>`}
  <button class="btn ghost" data-a="edit" data-id="${w.id}">${ico('pencil', 18)} Edit workout</button></div>
  ${future ? '<p class="small muted" style="margin:10px 0 0">You can log this workout on or after its day.</p>' : ''}</div>`;
}
function fillPlans() {
  const P = S.plan;
  $('#plans-sub').textContent = P ? `${P.name} · started ${fmt(P.start, { month: 'short', day: 'numeric' })} · ${plural(perWeek(P), 'day')} a week` : '';
  $('#plans-edit').hidden = !(P && P.days); $('#plans-delete').hidden = !P; $('#plans-actions').hidden = !P;
  $('#plans-list').innerHTML = P ? `<div class="grid3">${wIds(P).map(k => wCard(P.workouts[k])).join('')}</div>` : noPlan('Tell us your goals and we\'ll create a plan you can edit any time.');
}
function fillProgress() {
  const L = [...S.logs].sort((a, b) => a.date < b.date ? -1 : 1), u = unit(), st = streak(), u0 = S.user;
  $('#prog-sub').textContent = L.length ? `Since ${fmt(L[0].date, { month: 'long', day: 'numeric' })}` : 'Your workouts will show up here once you log them.';
  $('#st-streak').textContent = st; $('#st-streak-u').textContent = st === 1 ? 'workout' : 'workouts'; $('#st-done').textContent = L.length;
  $('#st-vol').textContent = Math.round(L.reduce((a, l) => a + l.vol, 0)).toLocaleString();
  document.querySelectorAll('.unit-label').forEach(e => e.textContent = u);
  const pts = L.slice(-10).map(l => ({ x: fmt(l.date, { month: 'short', day: 'numeric' }), y: Math.round(l.vol) }));
  $('#chart').innerHTML = pts.length ? chart(pts) : '<p class="muted">Log a workout to start your chart.</p>';
  const pb = {}; L.forEach(l => l.entries.forEach(e => { const m = metric(e); if (m > 0 && (!pb[e.id] || m > pb[e.id])) pb[e.id] = m }));
  const counts = {}; L.forEach(l => counts[l.name] = (counts[l.name] || 0) + 1);
  $('#goals').innerHTML = u0 ? `<p class="muted" style="margin:0 0 8px">Starting weight: <b style="color:var(--blue)">${u0.weight} ${u0.unit}</b></p><ul class="exlist">${u0.goals.map(g => `<li><span class="n">${GOALS.find(x => x[0] === g)[1]}</span></li>`).join('')}</ul>` : '<p class="muted">No goals set yet.</p>';
  $('#pbs').innerHTML = Object.keys(pb).length ? Object.entries(pb).map(([id, m]) => `<div class="pb"><span>${EX[id].n}</span><b>${pbFmt(id, m)}</b></div>`).join('') : '<p class="muted">Your best lifts, times and distances appear here.</p>';
  $('#counts').innerHTML = Object.keys(counts).length ? Object.entries(counts).map(([n, c]) => `<div class="pb"><span>${esc(n)}</span><b>${c}×</b></div>`).join('') : '<p class="muted">Nothing logged yet.</p>';
}
function fillEx() { $('#q').value = U.q; $('#results').innerHTML = exResults() }
function chart(pts) {
  const W = 640, H = 230, pl = 48, pr = 16, pt = 14, pb = 32, max = Math.max(...pts.map(p => p.y), 1) * 1.1;
  const X = i => pl + (pts.length === 1 ? (W - pl - pr) / 2 : i * (W - pl - pr) / (pts.length - 1)), Y = v => pt + (H - pt - pb) * (1 - v / max);
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Line chart of training volume for the last ${pts.length} workouts">`;
  [0, .5, 1].forEach(f => { const v = Math.round(max * f), y = Y(v); s += `<line x1="${pl}" x2="${W - pr}" y1="${y}" y2="${y}" stroke="#e5e7eb"/><text x="${pl - 8}" y="${y + 4}" text-anchor="end" font-size="14" fill="#6b7280">${v.toLocaleString()}</text>` });
  s += `<polyline fill="none" stroke="#2563eb" stroke-width="3" stroke-linejoin="round" points="${pts.map((p, i) => `${X(i)},${Y(p.y)}`).join(' ')}"/>`;
  pts.forEach((p, i) => { s += `<circle cx="${X(i)}" cy="${Y(p.y)}" r="5" fill="#fff" stroke="#2563eb" stroke-width="3"><title>${p.x}: ${p.y}</title></circle><text x="${X(i)}" y="${H - 10}" text-anchor="middle" font-size="14" fill="#6b7280">${p.x}</text>` });
  return s + '</svg>';
}
function exResults() {
  const q = U.q.trim().toLowerCase(); if (!q) return '';
  const hits = Object.keys(EX).filter(id => EX[id].n.toLowerCase().includes(q) || CATS[catOf(EX[id].a)].areas[EX[id].a].toLowerCase().includes(q));
  return `<div class="card"><h2>${plural(hits.length, 'result')}</h2>${hits.length ? hits.map(id => `<button class="exrow" data-a="ex-go" data-p="${catOf(EX[id].a)}/${EX[id].a}/${id}"><span>${EX[id].n}<br><span class="muted">${CATS[catOf(EX[id].a)].n} · ${CATS[catOf(EX[id].a)].areas[EX[id].a]}</span></span>${ico('chev', 18)}</button>`).join('') : '<p class="muted">No exercises match. Try "curl", "squat" or "core".</p>'}</div>`;
}
function vExercises() {
  const [c, a, id] = U.ex;
  const crumbs = ['Exercises Index', c && CATS[c].n, a && CATS[c].areas[a]].filter(Boolean);
  const head = `<div class="sub-head"><button class="back" data-a="ex-back">${ico('back', 20)} Back</button></div>`;
  if (id) {
    const e = EX[id];
    return `${head}<div class="crumb">${crumbs.join(' → ')}</div><h1>${e.n}</h1>
    <div class="grid2" style="margin-top:16px;align-items:start"><div><div class="figs">${[0, 1].map(k => `<figure>${photo(id, k) ? `<img src="${photo(id, k)}" ${IMG_EXTRA[id] && IMG_EXTRA[id].split ? `class="split-${k}"` : ''} alt="${e.n} ${k ? 'finish' : 'start'} position" onerror="this.hidden=true;this.nextElementSibling.hidden=false">` : ''}<span ${photo(id, k) ? 'hidden' : ''}>${figure(e.p[k], e.n + (k ? ' finish' : ' start') + ' position')}</span><figcaption>${k ? 'Finish' : 'Start'}</figcaption></figure>`).join('')}</div>${photoCredit(id) ? `<p class="small muted" style="margin-top:6px">Photos: ${photoCredit(id)}</p>` : ''}</div>
    <div class="card" style="margin:0">
    <h2>How to do it</h2><p class="muted">${e.d}</p>
</div></div>`;
  }
  if (a) {
    const list = Object.keys(EX).filter(k => EX[k].a === a);
    return `${head}<h1>${crumbs.join(' → ')}</h1><div class="card" style="margin-top:16px">${list.map(k => `<button class="exrow" data-a="ex-go" data-p="${c}/${a}/${k}">${EX[k].n}${ico('chev', 18)}</button>`).join('')}</div>`;
  }
  {
    const draw = k => k === 'cycling' ? figure('cycleA', 'Cycling') : k === 'running' ? figure('runA', 'Running') : body(k);
    // photo of a typical exercise; drawn tile if the photo can't load
    const tile = k => `<span class="aimg"><img src="${IMG_BASE}${AREA_IMG[k]}/1.jpg" alt="" onerror="this.parentNode.classList.add('noimg')"><span class="fallback">${draw(k)}</span></span>`;
    return `${head}<h1>${crumbs.join(' → ')}</h1>
    <div class="areas" style="margin-top:16px">${Object.entries(CATS[c].areas).map(([k, l]) => `<button class="area" data-a="ex-go" data-p="${c}/${k}">${l}${tile(k)}</button>`).join('')}</div>`;
  }
}
function stepper(i, j, f, v, ph, lbl, u) {
  return `<div class="stepper"><button data-a="st" data-i="${i}" data-j="${j}" data-f="${f}" data-d="-1" aria-label="Decrease ${lbl}">−</button><input data-in="${f}" data-i="${i}" data-j="${j}" inputmode="decimal" value="${esc(v)}" placeholder="${ph}" aria-label="${lbl}" autocomplete="off"><span class="u">${u}</span><button data-a="st" data-i="${i}" data-j="${j}" data-f="${f}" data-d="1" aria-label="Increase ${lbl}">+</button></div>`;
}
const exDone = e => e.sets.every(s => s.done);
const anyDone = () => S.draft.entries.some(e => e.sets.some(s => s.done && Number(s.r) > 0));
// an already-logged day may be saved with nothing ticked: that removes its log
const anyReps = () => anyDone() || !!logFor(S.draft.date);
function logMeta() {
  const n = S.draft.entries.filter(exDone).length, N = S.draft.entries.length;
  $('#ptxt').textContent = `${n} of ${N} exercises done`; $('#pbar').style.width = `${N ? n / N * 100 : 0}%`;
  const b = $('#savebtn'); b.disabled = !anyReps(); $('#savehint').hidden = !b.disabled;
}
function vLog() {
  const D = S.draft, w = S.plan && S.plan.workouts[D.wid];
  if (!w) return '';
  const n = D.entries.filter(exDone).length, N = D.entries.length, u = unit(), t = today();
  const cards = D.entries.map((e, i) => {
    const X = EX[e.id], rec = w.ex.find(x => x.id === e.id) || {}, T = X.t;
    const [rl, wl] = T === 'w' ? ['reps', u] : T === 't' ? ['sec', ''] : ['km', 'min'];
    return `<div class="card"><div class="exhead"><div><h3>${X.n} ${exDone(e) ? `<span class="exdone">${ico('check', 18)}</span>` : ''}</h3><div class="small muted">Recommended: ${exLine(rec)}</div></div>
    <button class="link small" data-a="ex-go" data-p="${catOf(X.a)}/${X.a}/${e.id}" data-from="log">How to</button></div>
    <div class="sets"><div class="sethead"><span>Set</span><span>${rl}</span><span>${wl}</span><span>Done</span></div>
    ${e.sets.map((s, j) => `<div class="setrow ${s.done ? 'done' : ''}"><span class="sn">${j + 1}</span>
      ${stepper(i, j, 'r', s.r, rec.reps ?? '', `${X.n} set ${j + 1} ${rl}`, rl)}
      ${T === 't' ? '<span></span>' : stepper(i, j, 'w', s.w, rec.w ?? '', `${X.n} set ${j + 1} ${wl === 'min' ? 'minutes' : 'weight in ' + u}`, wl)}
      <button class="tick" data-a="tick" data-i="${i}" data-j="${j}" aria-pressed="${s.done}" aria-label="Mark ${X.n} set ${j + 1} done">${ico('check', 20)}</button></div>`).join('')}</div></div>`;
  }).join('');
  const replacing = logFor(D.date);
  return `<div class="sub-head"><button class="back" data-a="log-back">${ico('back', 20)} Back</button></div>
  <div class="logtop"><div><h1>${esc(w.name)}</h1><p class="muted" style="margin:0">Enter reps and weight, then tick each set you finish.</p></div>
  <div class="datef"><label class="lbl" for="ld">Workout date</label><input type="date" id="ld" data-in="date" value="${D.date}" max="${t}"></div></div>
  ${replacing ? `<div class="note">A workout is already logged on this day. Saving will update it.</div>` : ''}
  <div class="card progress-card"><div style="display:flex;justify-content:space-between;font-weight:700"><span id="ptxt">${n} of ${N} exercises done</span><span class="muted small">${fmt(D.date, { weekday: 'short', month: 'short', day: 'numeric' })}</span></div><div class="bar"><i id="pbar" style="width:${N ? n / N * 100 : 0}%"></i></div></div>
  <div class="stack" style="margin-top:14px">${cards}</div>
  ${actionbar(`<button class="btn" id="savebtn" data-a="save-log" ${anyReps() ? '' : 'disabled'}>${ico('check', 20)} Save Log</button>`, `<div class="hint small muted" id="savehint" ${anyReps() ? 'hidden' : ''}>Tick at least one set to save</div>`)}`;
}
const ED = { sets: { w: [1, 1, 10], t: [1, 1, 10], d: [1, 1, 5] }, reps: { w: [1, 1, 100], t: [5, 5, 600], d: [.5, .5, 100] }, w: { w: [0, 0, 999], t: [0, 0, 0], d: [1, 1, 600] } };
function vEdit() {
  const w = curW(); if (!w) return ''; const bp = U.editSrc === 'bp';
  const u = unit();
  const rows = w.ex.map((e, i) => {
    const T = EX[e.id].t, f = (k, l, v) => `<div class="f"><div class="lbl">${l}</div><div class="stepper"><button data-a="ed" data-i="${i}" data-f="${k}" data-d="-1" aria-label="Decrease ${EX[e.id].n} ${l}">−</button><output aria-live="polite">${v}</output><button data-a="ed" data-i="${i}" data-f="${k}" data-d="1" aria-label="Increase ${EX[e.id].n} ${l}">+</button></div></div>`;
    return `<div class="card"><div class="edrow"><div><h3>${EX[e.id].n}</h3><div class="small muted">${exLine(e)}</div></div>
    <button class="icon-btn danger" data-a="ed-del" data-i="${i}" aria-label="Remove ${EX[e.id].n}" title="Remove" ${!bp && w.ex.length < 2 ? 'disabled' : ''}>${ico('trash', 19)}</button></div>
    <div class="edfields">${T !== 'd' ? f('sets', 'Sets', e.sets) : ''}${f('reps', T === 'w' ? 'Reps' : T === 't' ? 'Seconds' : 'Km', e.reps)}${T === 'w' ? f('w', `Weight (${u})`, e.w || '0') : T === 'd' ? f('w', 'Minutes', e.w) : ''}</div></div>`;
  }).join('');
  return `<div class="sub-head"><button class="back" data-a="ed-done">${ico('back', 20)} Back</button></div>
  <h1>Edit workout: ${esc(w.name)}</h1>
  <div class="note" style="margin-top:12px">${bp ? 'Add the exercises for this workout and set the sets, reps and weight.' : `Changes apply to every day this workout is scheduled.${S.draft && S.draft.wid === w.id ? ' Editing will discard the unsaved log for this workout.' : ''}`}</div>
  <div class="stack">${rows || '<div class="card empty"><p class="muted" style="margin:0">No exercises yet. Add your first one below.</p></div>'}</div>
  <button class="btn ghost wide" style="margin-top:14px" data-a="ed-add">${ico('plus', 20)} Add exercise</button>
  ${actionbar(`<button class="btn" data-a="ed-done">${ico('check', 20)} Done</button>`)}`;
}
// generated workouts only offer exercises that match them; Full Body and custom workouts offer everything
const PICK = { upper: x => catOf(x.a) === 'upper' && x.a !== 'core', lower: x => catOf(x.a) === 'lower', core: x => x.a === 'core', cardio: x => catOf(x.a) === 'cardio' };
function pickList() {
  const w = curW(), have = new Set(w.ex.map(e => e.id)), q = U.pq.trim().toLowerCase();
  const fit = PICK[w.id] || (() => true), ids = Object.keys(EX).filter(id => !have.has(id) && fit(EX[id]) && (!q || EX[id].n.toLowerCase().includes(q) || CATS[catOf(EX[id].a)].areas[EX[id].a].toLowerCase().includes(q)));
  return ids.length ? ids.map(id => `<button class="exrow" data-a="pick" data-id="${id}"><span>${EX[id].n}<br><span class="muted">${CATS[catOf(EX[id].a)].n} · ${CATS[catOf(EX[id].a)].areas[EX[id].a]}</span></span>${ico('plus', 18)}</button>`).join('') : '<p class="muted">No matching exercises.</p>';
}
function vPicker() {
  const w = curW();
  return `<div class="sub-head"><button class="back" data-a="pick-cancel">${ico('back', 20)} Back</button></div>
  <h1>Add to ${esc(w.name)}</h1>
  <div class="search" style="margin-top:14px"><label class="sr" for="pq">Search exercises</label>${ico('search', 20)}<input id="pq" class="inp" data-in="pq" placeholder="Search exercises…" value="${esc(U.pq)}" autocomplete="off"></div>
  <div class="card" id="presults">${pickList()}</div>`;
}

/* ---------- render ---------- */
const VIEWS = { build: vBuild, log: vLog, ex: vExercises, edit: () => U.pick ? vPicker() : vEdit() };
const FILL = { today: fillToday, schedule: fillSchedule, plans: fillPlans, progress: fillProgress, ex: fillEx };
function render() {
  if (U.tab === 'log' && !(S.draft && S.plan && S.plan.workouts[S.draft.wid])) { S.draft = null; U.tab = PAGE }
  const full = U.tab === 'welcome' || U.tab === 'ob';
  document.body.classList.toggle('nonav', full);
  document.title = `FitPlan · ${{ welcome: 'Welcome', ob: 'Get started', today: 'Today', schedule: 'Schedule', plans: 'Plans', progress: 'Progress', ex: 'Exercises', log: 'Log workout', edit: 'Edit workout', build: 'Create plan' }[U.tab]}`;
  const show = U.tab === 'welcome' ? 'welcome' : U.tab === 'ob' ? (U.ob.step === 6 ? 'ready' : 'ob') : U.tab === PAGE && !(PAGE === 'ex' && U.ex.length) ? 'page' : 'sub';
  for (const sec of document.querySelectorAll('main > section')) sec.hidden = sec.id !== show;
  if (show === 'page') FILL[PAGE](); else if (show === 'ob') renderOb(); else if (show === 'ready') renderReady(); else if (show === 'sub') $('#sub').innerHTML = VIEWS[U.tab]();
  renderModal();
  if (U.modal) { const b = $('.overlay:not([hidden]) [data-a="ok"]') || $('.overlay:not([hidden]) [data-a="close"]'); b && b.focus() }
}
function go(t) {
  if (FILE[t] && t !== PAGE) { location.href = FILE[t]; return }
  // the welcome screen and questionnaire live in index.html
  if ((t === 'welcome' || t === 'ob') && PAGE !== 'today') { location.href = 'index.html' + (t === 'ob' ? '#ob' : ''); return }
  if ((t === 'log' || t === 'ex') && !['log', 'ex', 'edit'].includes(U.tab)) U.prev = U.tab;
  if (t === 'ex' && U.tab !== 'ex') { U.ex = []; U.q = '' }
  U.tab = t; render(); window.scrollTo(0, 0);
  const h = $('main > section:not([hidden]) h1'); if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }) }
}
function obBegin() { U.ob = { step: 1, gender: '', unit: 'lbs', weight: '', freq: '', goals: [] }; go('ob') }
function startWorkout(date) {
  const w = workoutFor(date); if (!w) return;
  const same = S.draft && S.draft.date === date && S.draft.wid === w.id;
  const begin = () => {
    if (!same) {
      const lg = logFor(date), prev = lg && lg.wid === w.id ? lg : null;
      S.draft = {
        date, wid: w.id, entries: w.ex.map(e => {
          const pe = prev && prev.entries.find(x => x.id === e.id);
          return {
            id: e.id, sets: Array.from({ length: EX[e.id].t === 'd' ? 1 : e.sets }, (_, j) => {
              const ps = pe && pe.sets.find((x, k) => (x.j ?? k) === j);
              return ps ? { r: String(ps.r), w: String(r1(ps.w)), done: ps.done ?? true } : { r: '', w: EX[e.id].t === 't' ? '' : String(e.w || 0), done: false }
            })
          }
        })
      };
      save();
    }
    go('log');
  };
  const dirty = S.draft && S.draft.entries.some(e => e.sets.some(s => s.r !== '' || s.done));
  if (S.draft && !same && dirty) return ask('Discard workout in progress?', 'You have an unsaved workout log. Starting this one will discard it.', 'Discard & start', begin);
  begin();
}
function dropDraft(wid) { if (S.draft && S.draft.wid === wid) S.draft = null }
function saveLog() {
  const D = S.draft, w = S.plan.workouts[D.wid];
  const entries = D.entries.map(e => ({ id: e.id, sets: e.sets.map((s, j) => ({ r: Number(s.r), w: Number(s.w) || 0, done: s.done, j })).filter(s => s.done && s.r > 0) })).filter(e => e.sets.length);
  if (!entries.length) {
    if (!logFor(D.date)) return;
    S.logs = S.logs.filter(l => l.date !== D.date); S.draft = null; save();
    go(U.prev === 'schedule' ? 'schedule' : 'today'); return toast('Log removed', 'No sets were ticked, so this day is no longer marked done.');
  }
  const others = S.logs.filter(l => l.date !== D.date), pbs = [];
  entries.forEach(e => { const m = metric(e); if (m <= 0) return; const prev = others.flatMap(l => l.entries.filter(x => x.id === e.id)).map(metric); if (prev.length && m > Math.max(...prev)) pbs.push(`${EX[e.id].n} ${pbFmt(e.id, m)}`) });
  S.logs = [...others, { date: D.date, wid: D.wid, name: w.name, entries, vol: volume(entries), pbs, ts: Date.now() }].sort((a, b) => a.date < b.date ? -1 : 1);
  S.draft = null; save();
  go(U.prev === 'schedule' ? 'schedule' : 'today');
  toast(`Workout saved! ${plural(entries.length, 'exercise')} logged`, '', pbs.length ? `New personal best: ${pbs.join(', ')}` : '');
}
function askReset() { ask('Reset the demo?', 'This clears your plan, logs and settings, and starts again as a first-time user.', 'Reset demo', () => { S = fresh(); save(); if (PAGE !== 'today') return location.href = 'index.html'; Object.assign(U, { tab: 'welcome', prev: 'today', sel: null, week: 0, mon: 0, view: 'week', bp: null, ex: [], q: '', edit: null, pick: false, ob: null }); window.scrollTo(0, 0) }) }

function act(a, el) {
  const d = el.dataset;
  switch (a) {
    case 'nav': if (d.t === 'schedule') { U.sel = null; U.week = 0; U.mon = 0 } return go(d.t);
    case 'ob-start':
      if (S.plan && U.tab !== 'welcome') return ask('Replace your current plan?', 'Your workout history is kept, but your current plan and schedule will be replaced.', 'Replace plan', obBegin);
      return obBegin();
    case 'ob-skip': S.onboarded = true; save(); return go('today');
    case 'ob-next': if (!obOk(U.ob.step)) return; U.ob.step++; return go('ob');
    case 'ob-back': if (U.ob.step > 1) { U.ob.step--; return go('ob') } return go(S.onboarded ? 'today' : 'welcome');
    case 'ob-goto': U.ob.step = +d.s; return go('ob');
    case 'ob-unit': { const o = U.ob; if (o.unit !== d.u && o.weight !== '' && isFinite(+o.weight)) o.weight = String(Math.round(d.u === 'kg' ? o.weight / 2.2046 : o.weight * 2.2046)); o.unit = d.u; render(); return $('#wt').focus() }
    case 'ob-create': { const o = U.ob; S.plan = generatePlan(o); S.unit = o.unit; S.user = { gender: o.gender, unit: o.unit, weight: Number(o.weight), freq: o.freq, goals: [...o.goals] }; S.onboarded = true; S.draft = null; save(); o.step = 6; return go('ob') }
    case 'perweek': S.plan.pattern = PER_WEEK[d.n]; save(); return render();
    case 'ob-done': U.sel = null; U.week = 0; return go('today');
    case 'start': return startWorkout(d.d);
    case 'log-back': go(U.prev); return toast('Workout draft kept', 'Tap “Resume Workout” to pick up where you left off.');
    case 'st': {
      const s = S.draft.entries[+d.i].sets[+d.j], T = EX[S.draft.entries[+d.i].id].t, f = d.f;
      const inc = f === 'r' ? (T === 't' ? 5 : T === 'd' ? .5 : 1) : (T === 'd' ? 1 : unit() === 'lbs' ? 5 : 2.5);
      s[f] = String(clamp(r1((Number(s[f]) || 0) + inc * (+d.d)), 0, 999)); save(); return render()
    }
    case 'tick': {
      const e = S.draft.entries[+d.i], s = e.sets[+d.j], rec = S.plan.workouts[S.draft.wid].ex.find(x => x.id === e.id);
      s.done = !s.done; if (s.done && !(Number(s.r) > 0) && rec) s.r = String(rec.reps); save(); return render()
    }
    case 'save-log': return saveLog();
    case 'wk': if (U.view === 'month') U.mon += +d.d; else U.week += +d.d; U.sel = null; return render();
    case 'wk0': U.week = 0; U.mon = 0; U.sel = today(); return render();
    case 'view': U.view = d.v; U.sel = null; U.week = 0; U.mon = 0; return render();
    case 'day': U.sel = d.d; return render();
    case 'edit': U.edit = d.id; U.editSrc = 'plan'; U.pick = false; U.editPrev = U.tab; return go('edit');
    case 'ed': {
      const w = curW(), e = w.ex[+d.i], [st, mn, mx] = ED[d.f][EX[e.id].t];
      const inc = d.f === 'w' && EX[e.id].t === 'w' ? (unit() === 'lbs' ? 5 : 2.5) : st;
      e[d.f] = clamp(r1(e[d.f] + inc * (+d.d)), mn, mx); editTouched(); return render()
    }
    case 'ed-del': {
      const w = curW(); if (U.editSrc !== 'bp' && w.ex.length < 2) return toast('A workout needs at least one exercise');
      const [x] = w.ex.splice(+d.i, 1); editTouched(); render(); return toast(`Removed ${EX[x.id].n}`)
    }
    case 'ed-add': U.pick = true; U.pq = ''; return go('edit');
    case 'pick': { const T = EX[d.id].t; const q0 = EX[d.id].eq[0], lb = unit() === 'lbs', w0 = T === 'd' ? 30 : T !== 'w' ? 0 : /Barbell|Smith/.test(q0) ? (lb ? 45 : 20) : /Dumbbell|Cable|Machine|Kettlebell/.test(q0) ? (lb ? 20 : 10) : 0; curW().ex.push(makeEx(d.id, T === 'd' ? 1 : 3, T === 'w' ? 10 : T === 't' ? 30 : 5, w0)); editTouched(); U.pick = false; go('edit'); return toast(`Added ${EX[d.id].n}`) }
    case 'pick-cancel': U.pick = false; return go('edit');
    case 'ed-done': { U.pick = false; const w = curW(); go(U.editPrev || 'plans'); return U.editSrc === 'bp' ? toast(`${w.name}: ${plural(w.ex.length, 'exercise')}`) : toast('Workout updated', 'Changes apply to every scheduled day.') }
    case 'del-w': {
      const w = S.plan.workouts[d.id];
      return ask(`Delete ${w.name}?`, wIds(S.plan).length > 1 ? `The ${w.name} workout will be removed${S.plan.days ? ' and its days become rest days' : ' and your other workouts will take its place in the schedule'}. Past logs are kept.` : 'This is the last workout in your plan, so the whole plan will be deleted. Past logs are kept.', 'Delete', () => {
        dropDraft(d.id); S.plan.rotation = S.plan.rotation.filter(k => k !== d.id); delete S.plan.workouts[d.id]; if (S.plan.days) for (const k in S.plan.days) if (S.plan.days[k] === d.id) delete S.plan.days[k]; if (!wIds(S.plan).length) S.plan = null; save(); toast(`${w.name} deleted`)
      })
    }
    case 'bp-start':
      if (S.plan) return ask('Replace your current plan?', 'Your workout history is kept, but your current plan and schedule will be replaced when you save the new one.', 'Continue', () => bpBegin(), false);
      return bpBegin();
    case 'bp-edit': U.bp = JSON.parse(JSON.stringify(S.plan)); U.bp.editing = true; U.bpPrev = U.tab; return go('build');
    case 'bp-cancel': U.bp = null; return go(U.bpPrev || 'plans');
    case 'bp-wadd': { const id = 'c' + Date.now(), n = wIds(U.bp).length + 1; U.bp.workouts[id] = { id, name: `Workout ${n}`, ex: [] }; U.edit = id; U.editSrc = 'bp'; U.editPrev = 'build'; U.pick = true; U.pq = ''; return go('edit') }
    case 'bp-wedit': U.edit = d.id; U.editSrc = 'bp'; U.editPrev = 'build'; U.pick = false; return go('edit');
    case 'bp-wdel': { const B = U.bp; delete B.workouts[d.id]; for (const k in B.days) if (B.days[k] === d.id) delete B.days[k]; return render() }
    case 'bp-save': {
      const B = U.bp; if (bpErr()) return;
      S.plan = { name: B.name.trim(), start: B.editing ? B.start : today(), days: B.days, workouts: B.workouts, rotation: [], pattern: [], custom: true };
      S.onboarded = true; S.draft = null; save(); const ed = B.editing; U.bp = null; go('plans'); return toast(ed ? 'Plan updated' : 'Your plan is saved!', 'Check the Schedule tab to see your week.')
    }
    case 'del-plan': return ask('Delete your entire plan?', 'Your schedule will be cleared. Logged workouts and progress are kept.', 'Delete plan', () => { S.plan = null; S.draft = null; save(); toast('Plan deleted') });
    case 'ex-go': { const p = d.p.split('/'); if (U.tab !== 'ex') { U.exFrom = U.tab === 'log' ? 'log' : null; if (U.tab !== 'log') U.prev = U.tab; U.tab = 'ex' } U.ex = p; render(); return window.scrollTo(0, 0) }
    case 'ex-back': if (U.exFrom === 'log') { U.exFrom = null; return go('log') } if (U.ex.length && PAGE === 'ex') { U.ex.pop(); render(); return window.scrollTo(0, 0) } return go(U.prev || 'today');
    case 'settings': U.modal = 'settings'; return render();
    case 'unit': { const was = unit(); setUnit(d.u); render(); return was !== d.u && toast(`Weights now shown in ${d.u}`) }
    case 'notif': S.notif = !S.notif; save(); return render();
    case 'reset': return askReset();
    case 'close': U.modal = null; return render();
    case 'ok': { const f = U.modal.fn; U.modal = null; f(); return render() }
  }
}
const fkey = el => ['a', 'i', 'j', 'f', 'd', 't', 'id', 'u'].map(k => el.dataset[k] || '').join('|');
document.addEventListener('click', e => {
  if (e.target.classList && e.target.classList.contains('overlay')) { U.modal = null; return render() }
  const el = e.target.closest('[data-a]'); if (!el || el.disabled) return;
  const k = fkey(el), tab = U.tab;
  act(el.dataset.a, el);
  // keep keyboard focus on the same control after a re-render (steppers, ticks)
  if (U.tab === tab && !U.modal && !document.activeElement.closest('main h1')) { const n = [...document.querySelectorAll('[data-a]')].find(x => fkey(x) === k); n && n.focus({ preventScroll: true }) }
});
document.addEventListener('input', e => {
  const el = e.target, f = el.dataset.in; if (!f) return;
  if (f === 'r' || f === 'w') {
    let v = el.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').slice(0, 5); if (Number(v) > 999) v = '999';
    if (v !== el.value) el.value = v; S.draft.entries[+el.dataset.i].sets[+el.dataset.j][f] = v; save(); logMeta();
  } else if (f === 'ob-w') { const v = el.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').slice(0, 6); if (v !== el.value) el.value = v; U.ob.weight = v; obMeta() }
  else if (f === 'bp-name') { U.bp.name = el.value; bpMeta() }
  else if (f === 'bp-wname') { U.bp.workouts[el.dataset.id].name = el.value; document.querySelectorAll(`[data-in=bp-day] option[value="${el.dataset.id}"]`).forEach(o => o.textContent = el.value || 'Untitled'); bpMeta() }
  else if (f === 'q') { U.q = el.value; $('#results').innerHTML = exResults() }
  else if (f === 'pq') { U.pq = el.value; $('#presults').innerHTML = pickList() }
});
document.addEventListener('change', e => {
  const el = e.target, f = el.dataset.in;
  if (f === 'ob-gender') { U.ob.gender = el.value; obMeta() }
  else if (f === 'ob-freq') { U.ob.freq = el.value; obMeta() }
  else if (f === 'ob-goal') { const g = el.value; U.ob.goals = el.checked ? [...U.ob.goals, g] : U.ob.goals.filter(x => x !== g); el.closest('.goal').classList.toggle('on', el.checked); obMeta() }
  else if (f === 'bp-day') { if (el.value) U.bp.days[el.dataset.d] = el.value; else delete U.bp.days[el.dataset.d]; el.closest('.bpday').classList.toggle('on', !!el.value); bpMeta() }
  else if (f === 'date') {
    let v = el.value; const t = today();
    if (!v || v > t) { v = t; toast("You can't log a workout in the future") }
    S.draft.date = v; save(); render();
  }
});
document.addEventListener('keydown', e => {
  if (e.altKey && e.shiftKey && e.code === 'KeyR') { e.preventDefault(); return askReset() }
  if (e.key === 'Escape' && U.modal) { U.modal = null; return render() }
  const f = e.target.dataset && e.target.dataset.in;
  if ((f === 'r' || f === 'w' || f === 'ob-w') && ['-', '+', 'e', 'E'].includes(e.key)) e.preventDefault();
  if (f === 'ob-w' && e.key === 'Enter' && obOk(2)) { U.ob.step++; go('ob') }
  if (e.key === 'Tab' && U.modal) { const fs = [...document.querySelectorAll('.overlay:not([hidden]) .modal button')]; if (fs.length) { const a = fs[0], z = fs[fs.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus() } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus() } } }
});
if (!S.onboarded && PAGE !== 'today') location.replace('index.html');
else if (location.hash === '#ob') { history.replaceState(null, '', location.pathname); obBegin() }
else render();
