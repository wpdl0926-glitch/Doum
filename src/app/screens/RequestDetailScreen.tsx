import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, ShoppingBag, Package, Smartphone, Sprout, Car, Archive, ChefHat, Tv, Box, Dog, Grid, FileText, Axe, Refrigerator, Pill, Droplets, Lightbulb, WashingMachine, Fence, Phone, BookOpen, Leaf, Armchair, Radio, Carrot, Image, Umbrella, PaintBucket, Calendar, MessageCircle, Fan, PaintRoller, Brush, Boxes, Footprints, TreePine, CookingPot, Hammer, Camera, Home, Square, HelpCircle, MapPin } from 'lucide-react';
import Layout from '../components/Layout';
import { useEffect, useRef } from 'react';
import mapImage from '../../imports/image-1.png';

const getIconByKeyword = (keywords: string[]) => {
  const keywordStr = keywords.join(' ');

  if (keywordStr.includes('전자제품')) return Smartphone;
  if (keywordStr.includes('농사')) return Sprout;
  if (keywordStr.includes('이동지원') || keywordStr.includes('이동')) return Car;
  if (keywordStr.includes('청소')) return WashingMachine;
  if (keywordStr.includes('요리')) return ChefHat;
  if (keywordStr.includes('일손')) return Package;
  if (keywordStr.includes('수리')) return Hammer;
  if (keywordStr.includes('정원관리')) return TreePine;
  if (keywordStr.includes('돌봄')) return MessageCircle;
  if (keywordStr.includes('말벗')) return MessageCircle;
  if (keywordStr.includes('반려동물')) return Dog;
  if (keywordStr.includes('산책')) return Footprints;
  if (keywordStr.includes('교육')) return BookOpen;
  if (keywordStr.includes('정리정돈')) return Boxes;
  if (keywordStr.includes('설치') || keywordStr.includes('조립')) return Box;
  if (keywordStr.includes('이사')) return Armchair;
  if (keywordStr.includes('심부름')) return ShoppingBag;
  if (keywordStr.includes('야외활동')) return TreePine;

  return HelpCircle;
};

export default function RequestDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, []);

  const requestDetails: Record<string, {
    title: string;
    person: string;
    keywords: string[];
    location: string;
    distance: string;
    description: string;
    credit: number;
    date: string;
    time: string;
    currentApplicants: number;
    totalSlots: number;
    isNew: boolean;
  }> = {
    '11': {
      title: '장보기 동행',
      person: '이순자 어르신',
      keywords: ['일손', '생활편의'],
      location: '다로리 동쪽 마을',
      distance: '850m',
      description: '혼자 장을 보기 어려워 근처 마트까지 함께 가주실 분을 찾고 있어요. 무거운 짐도 조금 들어주시면 감사하겠습니다.',
      credit: 28,
      date: '2026년 6월 2일',
      time: '오후 3:00',
      currentApplicants: 1,
      totalSlots: 3,
      isNew: true,
    },
    '12': {
      title: '무거운 쌀포대 옮기기',
      person: '강태식 어르신',
      keywords: ['이사', '일손'],
      location: '다로리 북쪽 마을',
      distance: '1.4km',
      description: '집 안 창고로 쌀포대를 옮겨야 하는데 혼자 들기 어려운 상황입니다. 힘을 써주실 분들의 도움이 필요합니다.',
      credit: 74,
      date: '2026년 6월 3일',
      time: '오전 10:00',
      currentApplicants: 2,
      totalSlots: 4,
      isNew: false,
    },
    '13': {
      title: '스마트폰 문자 확인',
      person: '윤복례 할머니',
      keywords: ['전자제품', '교육'],
      location: '다로리 서쪽 마을',
      distance: '300m',
      description: '스마트폰에 온 문자와 사진을 확인하는 방법을 배우고 싶어요. 천천히 알려주실 분을 기다리고 있습니다.',
      credit: 22,
      date: '2026년 6월 1일',
      time: '오후 1:00',
      currentApplicants: 0,
      totalSlots: 2,
      isNew: true,
    },
    '14': {
      title: '감자밭 잡초 제거',
      person: '최정호 어르신',
      keywords: ['농사', '야외활동'],
      location: '다로리 남쪽 밭길',
      distance: '2.1km',
      description: '감자밭 주변에 잡초가 많이 자라 혼자 정리하기 어렵습니다. 함께 밭일을 도와주실 분을 찾고 있습니다.',
      credit: 63,
      date: '2026년 6월 5일',
      time: '오전 7:30',
      currentApplicants: 3,
      totalSlots: 5,
      isNew: false,
    },
    '15': {
      title: '병원 진료 동행',
      person: '김복자 할머니',
      keywords: ['이동지원', '돌봄'],
      location: '다로리 중앙길',
      distance: '600m',
      description: '병원 진료 예약이 있는데 혼자 이동하기 어려워 동행해주실 분이 필요합니다. 접수도 함께 도와주시면 좋겠습니다.',
      credit: 41,
      date: '2026년 6월 4일',
      time: '오전 9:00',
      currentApplicants: 1,
      totalSlots: 2,
      isNew: true,
    },
    '16': {
      title: '창고 정리 도와주세요',
      person: '오재문 어르신',
      keywords: ['청소', '일손'],
      location: '다로리 북서 마을',
      distance: '1.8km',
      description: '오랫동안 사용하지 않은 창고를 정리하려고 합니다. 상자 이동과 분류 작업을 함께 해주실 분을 찾고 있어요.',
      credit: 58,
      date: '2026년 6월 7일',
      time: '오후 2:00',
      currentApplicants: 2,
      totalSlots: 3,
      isNew: false,
    },
    '17': {
      title: '반찬 만들기 함께하기',
      person: '박춘희 할머니',
      keywords: ['요리', '생활편의'],
      location: '다로리 서쪽 마을',
      distance: '500m',
      description: '혼자 반찬을 만들기 어려워 간단한 요리를 함께 해주실 분을 기다리고 있습니다. 이야기 나누며 같이 준비하고 싶어요.',
      credit: 26,
      date: '2026년 6월 2일',
      time: '오전 11:00',
      currentApplicants: 0,
      totalSlots: 2,
      isNew: true,
    },
    '18': {
      title: '오래된 TV 연결',
      person: '한동수 어르신',
      keywords: ['전자제품', '설치'],
      location: '다로리 남쪽 마을',
      distance: '1.0km',
      description: 'TV와 셋톱박스를 연결하는 방법을 잘 모르겠습니다. 채널 설정까지 함께 도와주실 분을 찾고 있어요.',
      credit: 31,
      date: '2026년 6월 6일',
      time: '오후 5:00',
      currentApplicants: 1,
      totalSlots: 2,
      isNew: false,
    },
    '19': {
      title: '김장 재료 나르기',
      person: '정미자 할머니',
      keywords: ['일손', '요리'],
      location: '다로리 중앙시장 근처',
      distance: '1.3km',
      description: '김장 준비를 위해 재료를 집 안으로 옮겨야 합니다. 무거운 상자를 함께 들어주실 분이 필요합니다.',
      credit: 67,
      date: '2026년 6월 8일',
      time: '오전 8:00',
      currentApplicants: 4,
      totalSlots: 5,
      isNew: true,
    },
    '20': {
      title: '강아지 산책 부탁',
      person: '이경수 어르신',
      keywords: ['반려동물', '산책'],
      location: '다로리 강변길',
      distance: '700m',
      description: '다리가 불편해 강아지와 오래 걷기 어렵습니다. 잠시 산책을 함께 해주실 분을 찾고 있습니다.',
      credit: 24,
      date: '2026년 6월 1일',
      time: '오후 6:00',
      currentApplicants: 1,
      totalSlots: 1,
      isNew: false,
    },
    '21': {
      title: '창문 방충망 교체',
      person: '유병철 어르신',
      keywords: ['수리', '생활편의'],
      location: '다로리 북쪽 주택가',
      distance: '1.2km',
      description: '낡은 방충망이 찢어져 벌레가 많이 들어옵니다. 새 방충망으로 교체 작업을 도와주실 분을 찾고 있어요.',
      credit: 55,
      date: '2026년 6월 9일',
      time: '오후 1:00',
      currentApplicants: 0,
      totalSlots: 3,
      isNew: true,
    },
    '22': {
      title: '손주에게 편지 쓰기',
      person: '송옥자 할머니',
      keywords: ['교육', '말벗'],
      location: '다로리 서편 골목',
      distance: '250m',
      description: '손주에게 편지를 보내고 싶은데 글씨 쓰는 게 어려워졌어요. 천천히 받아 적어주실 분이 필요합니다.',
      credit: 20,
      date: '2026년 6월 3일',
      time: '오후 4:00',
      currentApplicants: 0,
      totalSlots: 1,
      isNew: false,
    },
    '23': {
      title: '장작 옮기기',
      person: '문상철 어르신',
      keywords: ['일손', '야외활동'],
      location: '다로리 산자락 마을',
      distance: '2.7km',
      description: '겨울 준비를 위해 장작을 창고 안으로 옮기고 있습니다. 무거운 장작 운반을 함께 도와주시면 감사하겠습니다.',
      credit: 79,
      date: '2026년 6월 10일',
      time: '오전 9:30',
      currentApplicants: 2,
      totalSlots: 5,
      isNew: true,
    },
    '24': {
      title: '냉장고 정리',
      person: '배정임 할머니',
      keywords: ['청소', '생활편의'],
      location: '다로리 남쪽 마을',
      distance: '400m',
      description: '냉장고 안 식재료를 정리하고 청소하고 싶어요. 오래된 음식 분류도 함께 부탁드립니다.',
      credit: 27,
      date: '2026년 6월 4일',
      time: '오전 10:30',
      currentApplicants: 1,
      totalSlots: 2,
      isNew: false,
    },
    '25': {
      title: '약국 다녀오기',
      person: '고명환 어르신',
      keywords: ['심부름', '이동지원'],
      location: '다로리 중앙로',
      distance: '550m',
      description: '몸 상태가 좋지 않아 직접 약국에 가기 어렵습니다. 처방약 수령을 대신 도와주실 분을 찾고 있습니다.',
      credit: 23,
      date: '2026년 6월 1일',
      time: '오후 2:30',
      currentApplicants: 0,
      totalSlots: 1,
      isNew: true,
    },
    '26': {
      title: '텃밭 물주기',
      person: '임복순 할머니',
      keywords: ['농사', '야외활동'],
      location: '다로리 서쪽 텃밭',
      distance: '950m',
      description: '혼자 관리 중인 작은 텃밭에 물을 주고 작물 상태를 함께 살펴봐주실 분을 찾고 있습니다.',
      credit: 36,
      date: '2026년 6월 6일',
      time: '오전 7:00',
      currentApplicants: 1,
      totalSlots: 3,
      isNew: false,
    },
    '27': {
      title: '전등 교체',
      person: '조남기 어르신',
      keywords: ['수리', '생활편의'],
      location: '다로리 남동 마을',
      distance: '600m',
      description: '천장 전등이 나갔는데 교체하기 어려워 도움을 요청드립니다. 사다리 작업이 가능하신 분이면 좋겠습니다.',
      credit: 29,
      date: '2026년 6월 2일',
      time: '오후 7:00',
      currentApplicants: 0,
      totalSlots: 2,
      isNew: true,
    },
    '28': {
      title: '이불 빨래 도와주세요',
      person: '신옥분 할머니',
      keywords: ['청소', '생활편의'],
      location: '다로리 개울가 마을',
      distance: '1.1km',
      description: '겨울 이불 빨래가 혼자 하기 벅차 도움을 요청합니다. 세탁과 건조를 함께 도와주시면 감사하겠습니다.',
      credit: 48,
      date: '2026년 6월 7일',
      time: '오전 11:00',
      currentApplicants: 2,
      totalSlots: 3,
      isNew: false,
    },
    '29': {
      title: '화단 돌 정리',
      person: '양재근 어르신',
      keywords: ['정원관리', '야외활동'],
      location: '다로리 북쪽 언덕',
      distance: '1.6km',
      description: '마당 화단 주변 돌이 흐트러져 정리가 필요합니다. 돌을 옮기고 배치하는 작업을 함께 부탁드립니다.',
      credit: 52,
      date: '2026년 6월 8일',
      time: '오후 3:30',
      currentApplicants: 1,
      totalSlots: 4,
      isNew: true,
    },
    '30': {
      title: '자녀와 영상통화',
      person: '서영자 할머니',
      keywords: ['전자제품', '교육'],
      location: '다로리 서쪽 마을',
      distance: '350m',
      description: '휴대폰으로 자녀와 영상통화를 하고 싶은데 사용 방법이 익숙하지 않습니다. 연결 방법을 알려주세요.',
      credit: 21,
      date: '2026년 6월 5일',
      time: '오후 5:00',
      currentApplicants: 0,
      totalSlots: 3,
      isNew: false,
    },
    '31': {
      title: '오래된 책 정리',
      person: '차성호 어르신',
      keywords: ['정리정돈', '말벗'],
      location: '다로리 중앙 마을',
      distance: '800m',
      description: '오랫동안 쌓인 책들을 정리하고 싶습니다. 책 분류를 도와주시고 함께 이야기 나눠주시면 좋겠습니다.',
      credit: 34,
      date: '2026년 6월 9일',
      time: '오후 1:30',
      currentApplicants: 1,
      totalSlots: 2,
      isNew: true,
    },
    '32': {
      title: '마당 낙엽 치우기',
      person: '전복례 할머니',
      keywords: ['청소', '야외활동'],
      location: '다로리 동쪽 언덕',
      distance: '1.2km',
      description: '마당에 낙엽이 많이 쌓여 미끄럽고 위험합니다. 함께 쓸고 정리해주실 분을 찾고 있어요.',
      credit: 44,
      date: '2026년 6월 3일',
      time: '오전 8:00',
      currentApplicants: 2,
      totalSlots: 3,
      isNew: false,
    },
    '33': {
      title: '가구 재배치',
      person: '허진수 어르신',
      keywords: ['이사', '일손'],
      location: '다로리 북쪽 마을',
      distance: '2.0km',
      description: '방 안 가구 위치를 바꾸고 싶은데 혼자 옮기기 어렵습니다. 큰 가구 이동을 도와주세요.',
      credit: 72,
      date: '2026년 6월 11일',
      time: '오후 2:00',
      currentApplicants: 3,
      totalSlots: 4,
      isNew: true,
    },
    '34': {
      title: '라디오 사용법 배우기',
      person: '김화자 할머니',
      keywords: ['교육', '전자제품'],
      location: '다로리 남쪽 골목',
      distance: '200m',
      description: '새 라디오 사용법이 익숙하지 않아 방송 채널 맞추는 방법 등을 배우고 싶습니다.',
      credit: 20,
      date: '2026년 6월 1일',
      time: '오전 11:30',
      currentApplicants: 0,
      totalSlots: 1,
      isNew: false,
    },
    '35': {
      title: '배추 모종 심기',
      person: '박정태 어르신',
      keywords: ['농사', '야외활동'],
      location: '다로리 들판 입구',
      distance: '2.3km',
      description: '배추 모종 심는 작업을 함께 도와주실 분을 찾고 있습니다. 허리를 많이 쓰는 작업입니다.',
      credit: 61,
      date: '2026년 6월 12일',
      time: '오전 6:30',
      currentApplicants: 1,
      totalSlots: 5,
      isNew: true,
    },
    '36': {
      title: '손주 사진 인화',
      person: '남순희 할머니',
      keywords: ['전자제품', '생활편의'],
      location: '다로리 중앙길',
      distance: '450m',
      description: '휴대폰에 있는 손주 사진을 인화하고 싶어요. 사진 선택과 출력 신청을 함께 도와주실 분을 찾고 있습니다.',
      credit: 25,
      date: '2026년 6월 6일',
      time: '오후 12:00',
      currentApplicants: 0,
      totalSlots: 2,
      isNew: false,
    },
    '37': {
      title: '우산 수리 부탁',
      person: '백기수 어르신',
      keywords: ['수리', '생활편의'],
      location: '다로리 시장 근처',
      distance: '700m',
      description: '오랫동안 쓰던 우산 손잡이가 고장 났습니다. 간단한 수리 작업을 도와주시면 감사하겠습니다.',
      credit: 30,
      date: '2026년 6월 4일',
      time: '오후 4:30',
      currentApplicants: 1,
      totalSlots: 1,
      isNew: true,
    },
    '38': {
      title: '마루 청소',
      person: '최분이 할머니',
      keywords: ['청소', '돌봄'],
      location: '다로리 서쪽 주택가',
      distance: '500m',
      description: '허리가 아파 마루 청소를 오래 하기 어렵습니다. 물걸레 청소를 함께 도와주세요.',
      credit: 39,
      date: '2026년 6월 2일',
      time: '오전 9:00',
      currentApplicants: 0,
      totalSlots: 2,
      isNew: false,
    },
    '39': {
      title: '고구마 수확 보조',
      person: '정일권 어르신',
      keywords: ['농사', '일손'],
      location: '다로리 남쪽 밭길',
      distance: '2.8km',
      description: '고구마 수확철이라 일손이 많이 부족합니다. 수확과 운반 작업을 함께 도와주실 분을 찾고 있습니다.',
      credit: 83,
      date: '2026년 6월 13일',
      time: '오전 7:00',
      currentApplicants: 2,
      totalSlots: 6,
      isNew: true,
    },
    '40': {
      title: '말벗이 필요해요',
      person: '이정숙 할머니',
      keywords: ['말벗', '돌봄'],
      location: '다로리 중앙 아파트',
      distance: '300m',
      description: '혼자 있는 시간이 길어 외로움을 느끼고 있습니다. 잠시 함께 이야기 나눠주실 분을 기다리고 있어요.',
      credit: 20,
      date: '2026년 6월 1일',
      time: '오후 3:00',
      currentApplicants: 0,
      totalSlots: 1,
      isNew: false,
    },
    '41': {
      title: '선풍기 조립',
      person: '김두환 어르신',
      keywords: ['조립', '전자제품'],
      location: '다로리 북쪽 골목',
      distance: '650m',
      description: '새로 구매한 선풍기 조립이 어려워 도움을 요청합니다. 작동 확인까지 함께 부탁드립니다.',
      credit: 33,
      date: '2026년 6월 5일',
      time: '오후 6:00',
      currentApplicants: 1,
      totalSlots: 2,
      isNew: true,
    },
    '42': {
      title: '벽지 떼기 작업',
      person: '오창식 어르신',
      keywords: ['수리', '일손'],
      location: '다로리 재개발 구역',
      distance: '1.9km',
      description: '오래된 벽지를 교체하려고 합니다. 기존 벽지를 떼어내는 작업을 함께 도와주세요.',
      credit: 68,
      date: '2026년 6월 14일',
      time: '오전 10:00',
      currentApplicants: 2,
      totalSlots: 4,
      isNew: false,
    },
    '43': {
      title: '계단 손잡이 청소',
      person: '유정희 할머니',
      keywords: ['청소', '생활편의'],
      location: '다로리 남동 골목',
      distance: '550m',
      description: '계단 손잡이에 먼지가 많이 쌓여 청소가 필요합니다. 계단 주변 정리도 함께 부탁드립니다.',
      credit: 24,
      date: '2026년 6월 3일',
      time: '오후 1:00',
      currentApplicants: 0,
      totalSlots: 2,
      isNew: true,
    },
    '44': {
      title: '창고 짐 분류',
      person: '서병국 어르신',
      keywords: ['정리정돈', '일손'],
      location: '다로리 외곽 창고',
      distance: '1.7km',
      description: '창고에 오래 쌓인 짐들을 정리하려고 합니다. 버릴 물건과 남길 물건 분류를 함께 도와주세요.',
      credit: 57,
      date: '2026년 6월 9일',
      time: '오전 8:30',
      currentApplicants: 1,
      totalSlots: 3,
      isNew: false,
    },
    '45': {
      title: '산책 동행 부탁',
      person: '장복남 할머니',
      keywords: ['산책', '돌봄'],
      location: '다로리 하천길',
      distance: '400m',
      description: '혼자 산책하기 무서워 함께 걸어주실 분을 찾고 있습니다. 천천히 주변을 걸으며 이야기 나누고 싶어요.',
      credit: 22,
      date: '2026년 6월 2일',
      time: '오후 5:30',
      currentApplicants: 0,
      totalSlots: 1,
      isNew: true,
    },
    '46': {
      title: '나무 가지 치기',
      person: '한기철 어르신',
      keywords: ['정원관리', '야외활동'],
      location: '다로리 북쪽 언덕',
      distance: '2.4km',
      description: '마당 나무 가지가 많이 자라 정리가 필요합니다. 가지치기 작업을 함께 도와주실 분을 찾고 있어요.',
      credit: 76,
      date: '2026년 6월 15일',
      time: '오전 9:00',
      currentApplicants: 2,
      totalSlots: 5,
      isNew: false,
    },
    '47': {
      title: '전기밥솥 설정',
      person: '윤정자 할머니',
      keywords: ['전자제품', '교육'],
      location: '다로리 서편 마을',
      distance: '300m',
      description: '새로 산 전기밥솥 사용법이 어렵습니다. 예약 취사와 보온 설정 방법을 함께 알려주세요.',
      credit: 21,
      date: '2026년 6월 4일',
      time: '오후 12:30',
      currentApplicants: 0,
      totalSlots: 2,
      isNew: true,
    },
    '48': {
      title: '비닐하우스 정리',
      person: '문기수 어르신',
      keywords: ['농사', '일손'],
      location: '다로리 농장지대',
      distance: '3.0km',
      description: '비닐하우스 안 정리와 보수 작업이 필요합니다. 함께 작업해주실 분들의 도움이 절실합니다.',
      credit: 88,
      date: '2026년 6월 16일',
      time: '오전 6:00',
      currentApplicants: 3,
      totalSlots: 6,
      isNew: false,
    },
    '49': {
      title: '택배 물건 개봉',
      person: '노영숙 할머니',
      keywords: ['생활편의', '말벗'],
      location: '다로리 중앙 아파트',
      distance: '250m',
      description: '택배로 받은 물건을 개봉하고 정리하는 게 어렵습니다. 함께 도와주시면 감사하겠습니다.',
      credit: 20,
      date: '2026년 6월 1일',
      time: '오전 10:00',
      currentApplicants: 0,
      totalSlots: 1,
      isNew: true,
    },
    '50': {
      title: '세탁기 이동',
      person: '조태성 어르신',
      keywords: ['이사', '설치'],
      location: '다로리 남쪽 주택가',
      distance: '1.5km',
      description: '세탁기 위치를 옮기려고 하는데 혼자서는 어렵습니다. 무거운 가전제품 이동을 도와주세요.',
      credit: 81,
      date: '2026년 6월 17일',
      time: '오후 1:00',
      currentApplicants: 2,
      totalSlots: 4,
      isNew: false,
    },
    '51': {
      title: '안경 찾기 도와주세요',
      person: '배옥순 할머니',
      keywords: ['생활편의', '돌봄'],
      location: '다로리 서쪽 골목',
      distance: '180m',
      description: '집 안에서 안경을 잃어버려 찾기 어렵습니다. 함께 찾아주실 분을 기다리고 있어요.',
      credit: 20,
      date: '2026년 6월 2일',
      time: '오전 9:30',
      currentApplicants: 0,
      totalSlots: 1,
      isNew: true,
    },
    '52': {
      title: '시장 짐 들어주기',
      person: '강복현 어르신',
      keywords: ['이동지원', '일손'],
      location: '다로리 시장 입구',
      distance: '900m',
      description: '시장에서 장을 본 후 집까지 짐을 옮기기 어렵습니다. 무거운 짐을 함께 들어주세요.',
      credit: 37,
      date: '2026년 6월 6일',
      time: '오후 4:00',
      currentApplicants: 1,
      totalSlots: 2,
      isNew: false,
    },
    '53': {
      title: '꽃 화분 분갈이',
      person: '이복임 할머니',
      keywords: ['정원관리', '생활편의'],
      location: '다로리 남쪽 마을',
      distance: '750m',
      description: '키우던 화분들이 작아져서 분갈이가 필요합니다. 함께 작업해주실 분을 찾고 있어요.',
      credit: 35,
      date: '2026년 6월 8일',
      time: '오전 11:00',
      currentApplicants: 0,
      totalSlots: 3,
      isNew: true,
    },
    '54': {
      title: '오래된 컴퓨터 정리',
      person: '홍석준 어르신',
      keywords: ['전자제품', '정리정돈'],
      location: '다로리 북서 마을',
      distance: '1.3km',
      description: '사용하지 않는 컴퓨터 부품과 케이블 정리가 필요합니다. 분류와 정리를 함께 도와주세요.',
      credit: 49,
      date: '2026년 6월 10일',
      time: '오후 3:00',
      currentApplicants: 1,
      totalSlots: 2,
      isNew: false,
    },
    '55': {
      title: '지붕 아래 물건 이동',
      person: '최영근 어르신',
      keywords: ['일손', '야외활동'],
      location: '다로리 산길 입구',
      distance: '2.2km',
      description: '지붕 아래 창고에 있는 물건들을 옮겨야 합니다. 높은 곳 작업이 가능하신 분이면 좋겠습니다.',
      credit: 69,
      date: '2026년 6월 11일',
      time: '오전 8:00',
      currentApplicants: 2,
      totalSlots: 4,
      isNew: true,
    },
    '56': {
      title: '스마트폰 사진 삭제',
      person: '김영자 할머니',
      keywords: ['전자제품', '교육'],
      location: '다로리 중앙 마을',
      distance: '500m',
      description: '휴대폰 저장 공간이 부족해 사진 정리가 필요합니다. 삭제 방법과 보관 방법을 함께 알려주세요.',
      credit: 23,
      date: '2026년 6월 5일',
      time: '오후 2:00',
      currentApplicants: 0,
      totalSlots: 2,
      isNew: false,
    },
    '57': {
      title: '현관 정리 부탁',
      person: '박태진 어르신',
      keywords: ['청소', '정리정돈'],
      location: '다로리 남동 주택가',
      distance: '650m',
      description: '현관에 물건이 많이 쌓여 이동이 불편합니다. 신발과 생활용품 정리를 함께 도와주세요.',
      credit: 32,
      date: '2026년 6월 7일',
      time: '오후 12:00',
      currentApplicants: 1,
      totalSlots: 2,
      isNew: true,
    },
    '58': {
      title: '밭 울타리 보수',
      person: '신기복 어르신',
      keywords: ['수리', '농사'],
      location: '다로리 외곽 농지',
      distance: '3.4km',
      description: '밭 울타리 일부가 무너져 보수가 필요합니다. 나무 기둥 고정과 철선 작업을 함께 부탁드립니다.',
      credit: 92,
      date: '2026년 6월 18일',
      time: '오전 7:30',
      currentApplicants: 4,
      totalSlots: 6,
      isNew: false,
    },
    '59': {
      title: '라면 끓이는 법 배우기',
      person: '조순덕 할머니',
      keywords: ['요리', '교육'],
      location: '다로리 서쪽 골목',
      distance: '320m',
      description: '간단한 라면 조리도 어려워 도움을 요청합니다. 가스레인지 사용법도 함께 알려주시면 좋겠습니다.',
      credit: 20,
      date: '2026년 6월 3일',
      time: '오후 6:00',
      currentApplicants: 0,
      totalSlots: 1,
      isNew: true,
    },
    '60': {
      title: '창문 닦기',
      person: '임대수 어르신',
      keywords: ['청소', '생활편의'],
      location: '다로리 강변 주택가',
      distance: '1.0km',
      description: '창문에 먼지가 많이 쌓여 바깥 풍경이 잘 보이지 않습니다. 창틀과 유리 청소를 함께 도와주세요.',
      credit: 46,
      date: '2026년 6월 9일',
      time: '오전 10:00',
      currentApplicants: 1,
      totalSlots: 3,
      isNew: false,
    },
  };

  const request = id ? requestDetails[id] : null;

  if (!request) {
    return (
      <Layout>
        <div className="bg-white h-full w-full flex items-center justify-center">
          <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#898989]">
            요청을 찾을 수 없습니다.
          </p>
        </div>
      </Layout>
    );
  }

  const IconComponent = getIconByKeyword(request.keywords);
  const firstLetter = request.person.charAt(0);

  return (
    <Layout>
      <div ref={scrollRef} className="bg-white h-full w-full overflow-auto">
      <div className="relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-[20px] left-[20px] z-10 w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)]"
        >
          <ArrowLeft className="w-5 h-5 text-[#383838]" />
        </button>

        <div className="h-[180px] bg-[#f5f5f5] relative overflow-hidden mt-[15px]">
          <IconComponent className="w-16 h-16 text-[#00d3cd] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="px-[32px] py-[24px]">
          {request.isNew && (
            <div className="bg-[#00d3cd] inline-block px-3 py-1 rounded-full mb-3">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-white text-[10px]">NEW</p>
            </div>
          )}

          <h1 className="font-['Pretendard:Bold',sans-serif] text-[24px] text-[#383838] mb-2">
            {request.title}
          </h1>

          <div className="flex items-center gap-2 mb-4">
            {request.keywords.map((keyword, idx) => (
              <span key={idx} className="bg-[#f0f0f0] px-3 py-1 rounded-full">
                <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#787878]">{keyword}</p>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-6">
            <div className="w-[40px] h-[40px] rounded-full bg-[#A8C7BF] flex items-center justify-center">
              <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[14px]">{firstLetter}</span>
            </div>
            <div>
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[15px] text-[#383838]">{request.person}</p>
              <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">{request.location} ({request.distance})</p>
            </div>
          </div>

          <div className="space-y-4 mb-[100px]">
            <div className="flex gap-3">
              <div className="flex-1 rounded-[15px] p-4 bg-[#dcf8f4] border border-[#00d3cd]">
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878] mb-2">방문 일자</p>
                <p className="font-['Pretendard:Bold',sans-serif] text-[14px] text-black text-[#000000]">{request.date}</p>
              </div>

              <div className="flex-1 rounded-[15px] p-4 border border-[#00d3cd] bg-[#dcf8f4]">
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878] mb-2">지원 현황</p>
                <div className="flex items-center gap-2">
                  <p className="font-['Pretendard:Bold',sans-serif] text-[14px] text-black">
                    {request.currentApplicants}/{request.totalSlots}명 지원
                  </p>
                  {request.currentApplicants >= request.totalSlots && (
                    <span className="bg-[#ff9800] px-2 py-1 rounded-full">
                      <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-white">마감</p>
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-[#f5f5f5] rounded-[15px] p-4">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878] mb-2">도움 내용</p>
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838] leading-[1.6]">
                {request.description}
              </p>
            </div>

            <div className="bg-[#f5f5f5] rounded-[15px] p-4">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878] mb-2">예상 크레딧</p>
              <p className="font-['Pretendard:Bold',sans-serif] text-[17px] text-[#00d3cd]">+{request.credit} 크레딧</p>
            </div>

            <div className="bg-[#f5f5f5] rounded-[15px] p-4">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878] mb-2">방문 희망 시간</p>
              <p className="font-['Pretendard:Bold',sans-serif] text-[14px] text-black">{request.time}</p>
            </div>

            <div className="bg-[#f5f5f5] rounded-[15px] overflow-hidden">
              <div className="pt-[16px] pb-0 px-[16px]">
                <div className="flex gap-[20px] items-center mb-0">
                  <p className="font-['Pretendard:SemiBold',sans-serif] leading-[19.5px] text-[13px] text-[#787878] whitespace-nowrap">장소</p>
                  <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[15px] text-[10px] text-[#a2a2a2] whitespace-nowrap">약속 확정 시 구체적인 주소 제공</p>
                </div>
                <p className="font-['Pretendard:Bold',sans-serif] leading-[21px] text-[14px] text-black whitespace-nowrap pb-[12px] pt-[8px]">{request.location}</p>
              </div>
              <div className="h-[200px] relative flex items-center justify-center pt-0 pb-[20px] px-[15px]">
                <img
                  src={mapImage}
                  alt={`${request.location} 지도`}
                  className="w-full h-full object-cover rounded-[10px]"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <MapPin className="w-10 h-10 text-[#00d3cd] fill-[#00d3cd] drop-shadow-lg" />
                </div>
              </div>
            </div>

            <div className="text-center py-4 mb-[200px]">
              <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">🔒 동행인과 연락처 정보는 매칭 확정 후 제공됩니다</p>
            </div>
          </div>

          <div className="fixed bottom-[100px] left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-64px)] z-10 flex justify-center">
            <button
              onClick={() => navigate(`/accept/${id}`)}
              disabled={request.currentApplicants >= request.totalSlots}
              className={`w-[327px] font-['Pretendard:Bold',sans-serif] text-[16px] py-4 rounded-[15px] shadow-[0px_4px_10px_rgba(0,0,0,0.2)] ${
                request.currentApplicants >= request.totalSlots
                  ? 'bg-[#c4c4c4] text-[#787878] cursor-not-allowed'
                  : 'bg-[#00d3cd] text-white'
              }`}
            >
              {request.currentApplicants >= request.totalSlots ? '지원이 마감되었습니다' : '도움 요청 수락하기'}
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
