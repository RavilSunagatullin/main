from django.shortcuts import render

def index(request):
    data={
        'title': 'Vacancy',
        'forApplicants':'абитуренту',
        'linkForApplicants':'https://tehcoll.org/sveden/education#',
        
    }
    return render(request, "main/index.html", data)

def TT(request):
    return render(request, "main/fors/forTT.html")

def IS(request):
    return render(request, "main/fors/forIS.html")

def CHPY(request):
    return render(request, "main/fors/forCHPY.html")

def TERP(request):
    return render(request, "main/fors/forTERP.html")

def OP(request):
    return render(request, "main/fors/forOP.html")

def TM(request):
    return render(request, "main/fors/forTM.html")

def MO(request):
    return render(request, "main/fors/forMO.html")

def KA(request):
    return render(request, "main/fors/forKA.html")

def BY(request):
    return render(request, "main/fors/forBY.html")